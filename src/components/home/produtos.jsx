import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import produto1 from './img/produto1.jpg'
import produto2 from './img/produto2.jpg'
import produto3 from './img/produto3.jpg'
import produto4 from './img/produto4.jpg'
import './produtos.css'




export default function Produtos() {
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
        <Main id='produtos'> 
          <ContainerCards ref={containerRef}>
            <Card className='card cardVisible' slideFrom='left'><Img src={produto1}/><p></p></Card>
            <Card className='card cardVisible' slideFrom='right'><Img src={produto2}/></Card>
            <Card className='card' slideFrom='left'><Img src={produto3}/></Card>
            <Card className='card' slideFrom='right'><Img src={produto4}/></Card>
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
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &.cardVisible {
    animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideFromLeft : slideFromRight)} 1s forwards;
  }

  &.cardHide {
    animation: ${({ slideFrom }) => (slideFrom === 'left' ? slideToLeft : slideToRight)} 0.5s forwards;
  }
`

const Main = styled.main`

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #d3dbd8;


`