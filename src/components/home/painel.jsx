import React from 'react'
import styled from 'styled-components'
import '../App.css'
import './css/painel.css'
import SetaImg from './img/seta.png'


export default function Painel() {
    return (
        <Main id='painel'>
            <DivContainer className='divContainer'>
                <DivConteudo>
                    <H2Titulo>
                    </H2Titulo>
                </DivConteudo>
            </DivContainer>
            <SetaBaixo className='setaBaixo' src={SetaImg}>
            </SetaBaixo>
        </Main>
    )
}


const SetaBaixo = styled.img`
position: absolute;
bottom: 150px;
margin: auto;
right: 50%;
left: 50%;
width: 50px;
`

const Main = styled.main`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
background: #f5f5f5;
position: relative;
`
const DivContainer = styled.div`

width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const DivConteudo = styled.div`
width: 600px;
display: flex;
flex-direction: column;
justify-content: center;
height: 500px;

`

const H2Titulo = styled.h2`
font-size: 50px;
text-align: center;
color: #649105;

`
