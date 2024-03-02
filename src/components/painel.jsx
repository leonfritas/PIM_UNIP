import React from 'react'
import ImgPainel from '../assets/images/quebraCabeca.png'
import styled from 'styled-components'
import '../App.css'
import './painel.css'


export default function Painel(){
    return(
        <Main id='painel'>
            
            <DivContainer className='divContainer'>
                <DivConteudo>
                    <H2Titulo>
                        Bem vindo (a) ao Saúde Mental Manaus
                    </H2Titulo>
                </DivConteudo>
                
                {/* <DivPainel> */}
                    {/* <DivBoasVindas>
                        <div>
                            <H2BemVindo>Bem-vindo(a) a Saúde Mental Manaus</H2BemVindo>
                            <TxtBemVindo className='robotoLight'>Meu nome é Lincoln Almeida, PSICÓLOGO por formação e ESPECIALISTA EM SAÚDE MENTAL.
                                Para saber um pouco mais sobre mim e minha carreira na pscicologia clique na aba Sobre.</TxtBemVindo>
                        </div>
                        <A target='_blank' href='https://wa.me/+5592994235646'>
                            <BtnAgendar>
                                Agende já sua consulta
                            </BtnAgendar>
                        </A> */}
                        
                    {/* </DivBoasVindas>
                    
                    <DivConteudo>
                     <Img src={ImgPainel}/>
                    </DivConteudo>
                </DivPainel>  
                <H2Titulo>
                    Equilíbrio. Transformação. Liberdade. 
                </H2Titulo> */}
            </DivContainer>         
        </Main>
    )
}

const H1 = styled.h1`
`

const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
//padding-top: 80px;
// background: linear-gradient(#f5f5f5, #ADD8E6);
background: #f5f5f5;

`
const DivContainer = styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;



`

const DivPainel = styled.div`
width: 100%;
display: flex;
height: 100%;
align-items: center;
justify-content: space-around;
position: relative;

`

const DivBoasVindas = styled.div`

width: 700px;
height: 500px;
display: flex;
flex-direction: column;




`

const H2BemVindo = styled.h2`
margin-bottom: 30px;
font-size: 40px;
color: #191970;`

const TxtBemVindo = styled.h3`
text-align: justify;
color: #191970;
`

const Img = styled.img`
width: 600px;
position: absolute;
right: 0;


`

const DivConteudo = styled.div`

width: 600px;
display: flex;
flex-direction: column;
justify-content: center;
height: 500px;



`

const H2Titulo = styled.h2`

font-size: 70px;
text-align: center;

`

const BtnAgendar = styled.button`

text-align: center;
height: 80px;
width: 300px;
border: none;
background-color: #4682B4;
color: white;
font-weight: 600;
border-radius: 30px;
cursor: pointer;
font-size:22px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
transition: 300ms ease;

&:hover{
    
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
&:active{
    background-color: white;
}

`

const A = styled.a`
color: white;
height: 80px;
width: 280px;
margin-top: 80px;
border-radius: 30px;
`