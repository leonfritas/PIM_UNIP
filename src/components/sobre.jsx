import styled from 'styled-components'
import ImgSobre from '../assets/images/fotolincoln.png'
import './sobre.css'


export default function Sobre(){
    return(
        <Main id='sobre'> 
            
            <DivConteudo>
                <div className='textosSobre'>
                    <DivTexto>
                        <H2>Um pouco sobre mim</H2>

                        <P2>
                            Com uma trajetória de 8 anos dedicados à prática da psicologia, tenho auxiliado indivíduos a superarem desafios, conquistarem autoconhecimento e desenvolverem habilidades para uma vida mais satisfatória.
                        </P2>
                        <P2>
                            Minha abordagem é baseada em uma perspectiva humanista e integrativa, adaptando as técnicas terapêuticas de acordo com as necessidades e preferências de cada cliente.
                        </P2>
                        <Img src= {ImgSobre}  ></Img>
                    </DivTexto>
                    
                    <DivTextoo>
                        <H2>Experiência Profissional</H2>

                        <P2>
                            Com 8 anos de experiência no campo da Psicologia, tenho tido a honra de trabalhar com indivíduos de diferentes idades, origens e contextos de vida. Durante minha carreira, atuei em diversos cenários, como clínicas, hospitais e instituições de ensino. Essa diversidade de experiências me proporcionou uma visão ampla sobre as necessidades emocionais e mentais das pessoas.
                        </P2>
                        <H2>Áreas de Atuação</H2>
                        <P2>
                            Minha atuação profissional abrange diversas áreas da Psicologia. Tenho expertise em Psicoterapia Individual, ajudando meus pacientes a superar desafios emocionais e comportamentais, além de promover o autoconhecimento e crescimento pessoal.

                            Adicionalmente, minha especialização em Terapia Familiar permitiu-me contribuir para o fortalecimento dos laços afetivos e a resolução de conflitos dentro das dinâmicas familiares.
                        </P2>
                    </DivTextoo>
              
                </div>
                
                
                
            </DivConteudo>

        </Main>
    )
}

const DivTextoo = styled.div`
height: 90%;
width: 40%;
color: white;
display: flex;
flex-direction: column;
gap: 30px;
padding: 30px;
font-size: 100%;
font-weight: 500;
`

const Main = styled.main`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;

`

const DivConteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f5f5f5;
border-radius: 30px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
height: 90%;
width: 90%;
padding: 10px;
`

const Img = styled.img`
width: 300px;
height: 300px;

//border-top-right-radius: 30px;
//border-bottom-right-radius: 30px;
border-radius: 50%;
`
const DivTexto = styled.h2`
height: 90%;
width: 40%;
color: white;
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
padding: 30px;
font-size: 100%;
font-weight: 500;


`

const P = styled.p`

text-align: justify;
font-weight: 300;
color: black;`

const P2 = styled.p`

text-align: justify;
color: black;`

const H2 = styled.h2`
color: black;`