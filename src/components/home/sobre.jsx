import styled from 'styled-components'
import './sobre.css'


export default function Sobre(){
    return(
        <Main id='sobre'>             
            <DivConteudo>
                <div className='textosSobre'>
                    <DivTexto>
                        <H2>Um pouco sobre nós</H2>
                        <P2>
                            Bem-vindo ao Hortifruti Frescura Natural, onde cultivamos a qualidade, o frescor e a saúde em cada fruta, verdura e legume que oferecemos. Nossa jornada começou há mais de duas décadas, quando um grupo de apaixonados por agricultura e alimentação saudável decidiu unir forças para criar um espaço que refletisse seus valores e visão.
                        </P2>
                        <H2>Nossa História</H2>
                        <P2>                            
                            Iniciamos nossa trajetória em uma pequena fazenda, cultivando produtos frescos com práticas agrícolas sustentáveis e respeito pela natureza. Com o tempo, o Hortifruti Frescura Natural cresceu, expandindo nossas operações para atender às crescentes demandas por alimentos frescos e de qualidade.
                        </P2>                                                                        
                    </DivTexto>                    
                    <DivTextoo>
                    <H2>Nosso Propósito</H2>
                        <P2>                            
                            Acreditamos que uma alimentação saudável é a base para uma vida plena. Nosso propósito é proporcionar a você e sua família acesso fácil a alimentos frescos, nutritivos e saborosos. Queremos ser mais do que um hortifrúti; queremos ser seu parceiro na busca por um estilo de vida saudável e equilibrado.
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
height: 80%;
width: 90%;
padding: 10px;
`

// const Img = styled.img`
// width: 300px;
// height: 300px;

// //border-top-right-radius: 30px;
// //border-bottom-right-radius: 30px;
// border-radius: 50%;
// `
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
color: black;
`

const P2 = styled.p`

text-align: justify;
font-weight: 800;
font-size: 20px;
font-family: cursive;
color: #006400;
`

const H2 = styled.h2`
font-weight: 800;
font-size: 30px;
font-family: cursive;
color: #006400;
`