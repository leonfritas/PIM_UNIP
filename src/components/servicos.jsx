import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import servico1 from '../assets/images/servico1.jpg'
import servico2 from '../assets/images/servico2.jpg'
import servico3 from '../assets/images/servico3.jpg'
import servico4 from '../assets/images/servico4.jpg'




export default function Servicos() {
    const containerRef = useRef(null);
    const previousYRef = useRef(window.pageYOffset);
  
    useEffect(() => {
      const cards = containerRef.current.querySelectorAll('.card');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cardVisible');
            entry.target.classList.remove('cardHide');
          } else {
            if (previousYRef.current > window.pageYOffset) {
              entry.target.classList.add('cardHide');
            }
          }
        });
        previousYRef.current = window.pageYOffset;
      }, observerOptions);
  
      cards.forEach(card => {
        observer.observe(card);
      });
  
      return () => {
        cards.forEach(card => {
          observer.unobserve(card);
        });
      };
    }, []);



    return (
        <Main id='servicos'> 
          <ContainerCards ref={containerRef}>
            <Card className='card cardVisible' slideFrom='left'><Img src={servico1}/></Card>
            <Card className='card cardVisible' slideFrom='right'><Img src={servico2}/></Card>
            <Card className='card' slideFrom='left'><Img src={servico3}/></Card>
            <Card className='card' slideFrom='right'><Img src={servico4}/></Card>
          </ContainerCards>
        </Main>
    )
}

const Img = styled.img`
width: 100%;`

const ContainerCards = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Card = styled.div`
  width: 40%;
  height: 40%;
  opacity: 0;
  overflow: hidden;
  cursor: pointer;

  &.cardVisible {
    animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideFromLeft : slideFromRight)} 1s forwards;
  }

  &.cardHide {
    animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideToLeft : slideToRight)} 0.5s forwards;
  }
  &:hover{
    
  }
`;



const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #d3dbd8;


`
