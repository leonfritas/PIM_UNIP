import styled from 'styled-components'
// import Carousel from 'react-elastic-carousel'
import { useState, useEffect } from 'react'


import Img1 from './img/consulta1.jpg'
import Img2 from './img/consulta2.jpg'
import Img3 from './img/consulta3.jpg'
import { Link } from "react-router-dom";


export default function ComoFunciona(){


    const delay = 300;
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2, itemToScroll: 2},
        { width: 768, itemToShow: 3},
        { width: 1200, itemToShow: 4},
    ] 

    const [items, setItems] = useState([
        { id: 1, image: Img1, titulo: 'Wrap de Frango com Vegetais', texto: 'Calorias: 300-400 kcal | Proteínas: 25-30g | Gorduras: 10-15g | Carboidratos: 30-35g | Fibra: 5-8g' }, 
        { id: 2, image: Img2, titulo: 'Salada de Frutas com Hortelã', texto: 'Calorias: 150-200 kcal | Proteínas: 1-2g | Gorduras: 0-1g | Carboidratos: 35-45g | Fibra: 4-6g | Açúcares: 25-30g'  },
        { id: 3, image: Img3, titulo: 'Legumes Grelhados com Ervas', texto: 'Calorias: 250-300 kcal | Proteínas: 5-7g | Gorduras: 15-20g | Carboidratos: 25-30g | Fibra: 8-10g | Açúcares: 10-12g' }, 
        // { id: 3, image: Img3, titulo: 'Orientação Profissional', texto: 'A Orientação Profissional é um processo no campo da Psicologia que ajuda indivíduos a escolherem suas carreiras e caminhos acadêmicos. O psicólogo avalia interesses, habilidades e valores do cliente para identificar opções profissionais compatíveis com seu perfil, proporcionando clareza e informações relevantes para decisões informadas e bem-sucedidas.' },
        // { id: 3, image: Img3, titulo: 'Psicologia Organizacional', texto: 'Psicologia Organizacional é a área que estuda o comportamento humano nas organizações, visando melhorar a eficiência, produtividade e bem-estar dos funcionários. Os psicólogos organizacionais aplicam princípios psicológicos em recrutamento, treinamento, gestão de desempenho e resolução de conflitos, buscando criar um ambiente saudável que atenda às necessidades dos funcionários e dos objetivos da organização.' }

      ]);

      const [activeIndex, setActiveIndex] = useState(0);
      const [isModalOpen, setIsModalOpen] = useState(false);

      const nextImage = () => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      };

      const openModal = () => {
        setIsModalOpen(true);
        
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
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
                    {/* <Carousel breakPoints={breakPoints} >
                        {items.map((item, index) => (
                            <ItemCarousel className='containerCarousel' key={item.id} isActive={index == activeIndex}>
                                <h2 className='tituloCarousel'>{item.titulo}</h2>
                                <Link onClick={openModal}>
                                    <ImgCarousel className='imgCarousel' src={item.image} alt={`Item ${item.id}`} />
                                    <div className='textCarousel'>
                                  {item.texto}
                                </div>
                                </Link>                                                               
                            </ItemCarousel>
                        ))}
                    </Carousel> */}
                </DivImageCarosel>
            

            </DivCarrossel>
           
            <DivTexto>
            <H2>Alimentação Saudável: Um Cuidado Diário com Você Mesmo</H2>
            <P>
            Comer saudável é um ato de amor próprio, um compromisso diário que nutre não apenas o corpo, mas também a mente. Ao escolher alimentos frescos e equilibrados, estamos proporcionando ao nosso organismo os nutrientes essenciais para um funcionamento ótimo.
            </P>
            
            </DivTexto>
            
            
            {isModalOpen  && (
              <div className='Modal'>
                <div className='ModalContent'>
                  {/* Conteúdo do modal */}
                  
                  <h2>Receita 2</h2>
                  <p>Lorem 2 ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatem quas est obcaecati officiis? Eum minima temporibus, facere quam expedita, accusamus dolorem tenetur deserunt fugiat neque labore adipisci assumenda necessitatibus.</p>
                  <button className='CloseButton' onClick={() => setIsModalOpen(false)}>X</button>
                </div>
              </div>
            )}
            
            
        </Main>

        
    )
}

const ModalContent = styled.div`
background: black;
width: 500px;
height:`


const H2 = styled.h2`
font-size: 200%;
color: white;`



const ItemCarousel = styled.div`
border-radius: 20px;
`

const ImgCarousel = styled.img`
width: 100%;
height: 90%;
`
const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
 background-color: #f2f2f2;
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
background-color: #5f9ea0;
max-height: 80%;
padding: 50px;
border-radius: 20px;
font-size: 100%
font-weight: 500;
text-align: justify;

`

const P2 = styled.p`
margin: 20px 0;
font-size: 100%;
color: white;
`

const P = styled.p`
margin: 20px 0;
font-size: 100%
text-align: justify;
color: white;
`
