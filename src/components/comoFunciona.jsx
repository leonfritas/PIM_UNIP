import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import { useState, useEffect } from 'react'
import './comoFunciona.css'

import Img1 from '../assets/images/consulta1.jpg'
import Img2 from '../assets/images/consulta2.jpg'
import Img3 from '../assets/images/consulta3.jpg'


export default function ComoFunciona(){


    const delay = 300;
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2, itemToScroll: 2},
        { width: 768, itemToShow: 3},
        { width: 1200, itemToShow: 4},
    ] 

    const [items, setItems] = useState([
        { id: 1, image: Img1, titulo: 'Aconselhamento Psicológico', texto: 'Aconselhamento Psicológico oferece um espaço confidencial para encontrar apoio emocional e superar desafios. Como profissional de Psicologia, estou comprometido em ajudá-lo a explorar suas emoções, promovendo autoconhecimento e bem-estar. Juntos, enfrentaremos questões como ansiedade, estresse e problemas de relacionamento, buscando uma vida mais feliz e satisfatória. Agende sua sessão e dê o primeiro passo rumo ao crescimento pessoal.' }, 
        { id: 2, image: Img2, titulo: 'Psicoterapia Familiar', texto: 'A Psicoterapia Familiar busca melhorar a comunicação e os relacionamentos dentro da família, trabalhando com todos os membros juntos. O objetivo é resolver conflitos, identificar dinâmicas disfuncionais e fortalecer os laços afetivos, para criar um ambiente familiar mais saudável e harmonioso.'  },
        { id: 3, image: Img3, titulo: 'Terapia de Grupo', texto: 'A Terapia de Grupo é uma abordagem terapêutica em que um psicólogo conduz sessões com um grupo de pessoas que compartilham desafios semelhantes. O objetivo é promover o autoconhecimento, desenvolver habilidades emocionais e enfrentar problemas específicos, como ansiedade, depressão e questões de relacionamento. O grupo oferece suporte mútuo e aprendizado, tornando a experiência terapêutica enriquecedora e transformadora.' }, 
        { id: 3, image: Img3, titulo: 'Orientação Profissional', texto: 'A Orientação Profissional é um processo no campo da Psicologia que ajuda indivíduos a escolherem suas carreiras e caminhos acadêmicos. O psicólogo avalia interesses, habilidades e valores do cliente para identificar opções profissionais compatíveis com seu perfil, proporcionando clareza e informações relevantes para decisões informadas e bem-sucedidas.' },
        { id: 3, image: Img3, titulo: 'Psicologia Organizacional', texto: 'Psicologia Organizacional é a área que estuda o comportamento humano nas organizações, visando melhorar a eficiência, produtividade e bem-estar dos funcionários. Os psicólogos organizacionais aplicam princípios psicológicos em recrutamento, treinamento, gestão de desempenho e resolução de conflitos, buscando criar um ambiente saudável que atenda às necessidades dos funcionários e dos objetivos da organização.' }

      ]);

      const [activeIndex, setActiveIndex] = useState(0);

      const nextImage = () => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      };

      useEffect(() => {
        const interval = setInterval(nextImage, delay);
        return () => 
          clearInterval(interval);
      }, []);

    return(
        <Main id='comoFunciona'> 
            <DivCarrossel >
                <div className='constrols-wrapper'>

                </div>

                <DivImageCarosel className='carousel-wrapper'>
                <Carousel breakPoints={breakPoints} >
                    {items.map((item, index) => (
                        <ItemCarousel className='containerCarousel' key={item.id} isActive={index == activeIndex}>
                            <h2 className='tituloCarousel'>{item.titulo}</h2>
                            <ImgCarousel className='imgCarousel' src={item.image} alt={`Item ${item.id}`} />
                            <div className='textCarousel'>
                              {item.texto}
                            </div>
                        </ItemCarousel>
                    ))}
                </Carousel>
                </DivImageCarosel>
            

            </DivCarrossel>
           
            <DivTexto>
            <H2>Como funciona a consulta com o especialista?</H2>
            <P>
                Bem-vindo à sua jornada de autodescoberta e crescimento pessoal! Em uma consulta com um psicólogo, você encontrará um espaço acolhedor e seguro, onde suas preocupações e emoções serão ouvidas com profunda empatia. Com cuidado e respeito, o psicólogo irá guiá-lo rumo à clareza e bem-estar emocional.
            </P>
            <P2>
                Lembre-se, a consulta com o psicólogo não apenas trará alívio para o seu sofrimento, mas também abrirá as portas para uma vida mais plena, significativa e gratificante.
            </P2>
            </DivTexto>
            
        </Main>
    )
}

const H2 = styled.h2`
font-size: 200%;`



const ItemCarousel = styled.div`
`

const ImgCarousel = styled.img`
width: 100%;
height: 90%;`
const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #5f9ea0;
padding:50px;
gap: 20px;

`

const DivImageCarosel = styled.div`


`

const DivCarrossel = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
height: 90%;
width: 60%;



`

const DivTexto = styled.div`
width: 40%;
background-color: white;
max-height: 80%;
padding: 50px;
border-radius: 20px;
font-size: 100%
font-weight: 500;
text-align: justify;

`

const P2 = styled.p`
margin: 20px 0;
font-size: 100%
`

const P = styled.p`
margin: 20px 0;
font-size: 100%
text-align: justify;`
