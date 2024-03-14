import React from 'react'
import Logo2 from './img/logoHortiFruti.png'
import styled, { keyframes} from 'styled-components'
import { useState, useEffect } from 'react'
import './header.css'


export default function Header(){

    const [header, setHeader] = useState(false);

    // Função disparada quando o scroll inicia
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
        // <HeaderDiv className={`${header ? '' : 'visible'}`}>
        <HeaderDiv>
            <DivLogo className='divLogo'> 
                <a href='#painel'><img className="logoHortiFruti" src={Logo2}/></a>
            </DivLogo>
            <nav className='nav'>
                <Ul className='menu'> 
                    {/* <a href='#sobre'><Li className={`${header ? 'visible' : ''}`}> Sobre nós</Li></a>
                    <a href='#produtos'><Li className={`${header ? 'visible' : ''}`}>Produtos</Li></a>
                    <a href='#comoFunciona'><Li className={`${header ? 'visible' : ''}`}>Receitas e Dicas</Li></a> */}
                    <a className="linkHeader" href='#sobre'><Li> Sobre nós</Li></a>
                    <a className="linkHeader" href='#produtos'><Li>Produtos</Li></a>
                    <a className="linkHeader" href='#comoFunciona'><Li>Receitas e Dicas</Li></a>
                   
                    <a className="linkHeaderPedido" target='_blank'  href='https://api.whatsapp.com/send?phone=5592994107470&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'><Li>Faça seu pedido aqui</Li></a>
                </Ul>
            </nav>
        </HeaderDiv>
    )
}


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
transition: 100ms ease-in-out;
padding: 10px 15px;
border-radius: 25px;

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
    height: 50px;
    z-index: 1;
    opacity:1;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    background: #f5f5f5;
    // background: #8CC84B;
    

    &.visible {
        opacity: 0.2;
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




const DivLogo = styled.div`

height: 100%;
margin-left: 100px;
display: flex;
align-items: center;
justify-content: flex-start;

`











