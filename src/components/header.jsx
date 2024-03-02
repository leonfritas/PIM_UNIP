import React from 'react'
import Logo2 from '../assets/images/logo2.png'
import styled, { keyframes} from 'styled-components'
import { useState, useEffect } from 'react'
export default function Header(){

    const [header, setHeader] = useState(false)

    useEffect(() => {
        const handleHeader = ()=>{
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            setHeader(scrollPosition > 0)
        }

        window.addEventListener('scroll', handleHeader);
        return() => {
            window.removeEventListener('scroll', handleHeader)
        }
    }, [])


    

    return(
        <HeaderDiv className={`${header ? 'visible' : ''}`}>
            <DivLogo className='divLogo'> 
                <a href='#painel'><Img className={`${header ? 'visible' : ''}`} src={Logo2}/></a>
            </DivLogo>
            <nav className='nav'>
                <Ul className='menu'> 
                    <a href='#sobre'><Li className={`${header ? 'visible' : ''}`}> Sobre mim</Li></a>
                    <a href='#servicos'><Li className={`${header ? 'visible' : ''}`}>Serviços</Li></a>
                    <a href='#comoFunciona'><Li className={`${header ? 'visible' : ''}`}>Como funciona?</Li></a>
                   
                    <AContato target='_blank'  href='https://api.whatsapp.com/send?phone=5592994235646&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'><LiContato className={`${header ? 'visible' : ''}`}>Agende já sua consulta</LiContato></AContato>
                </Ul>
            </nav>
        </HeaderDiv>
    )


 
}


const AContato = styled.a`
transition: 200ms ease-in-out;
margin: 0 5px;
padding: 10px 15px;
background-color: #4682B4;
border-radius: 25px;
color: white;



`

const LiContato = styled.li`
color: white;

`

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;



const Li = styled.li`
transition: 200ms ease-in-out;
padding: 10px 15px;
border-radius: 25px;

&:hover{
    background-color: #00CED1;
    border-radius: 25px;
    color: white;

    &.visible {
        margin: 5px;
        padding: 5px 10px;
        border-radius: 25px;
      }

 
}
`;


const HeaderDiv = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    height: 80px;
    z-index: 1;
    opacity:1;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background: #f5f5f5;
    

    &.visible {
        opacity: 0.6;
        background-color: #f5f5f5;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        height: 60px;
      }
    
    &:hover {
        opacity: 1;     


`

const Ul = styled.ul`

display: flex;
gap: 5px;
font-size: 20px;
margin-right: 100px;`


const Img = styled.img`
height: 100%;
cursor: pointer;
height: 80px;
&.visible{
    height:60px;
}`

const DivLogo = styled.div`

height: 100%;
margin-left: 100px;
display: flex;
align-items: center;
justify-content: flex-start;

`











