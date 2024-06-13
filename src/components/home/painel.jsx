import React from 'react'
import styled from 'styled-components'
import '../App.css'
import './css/painel.css'
import SetaImg from './img/seta.png'
import SteCarousel from './img/setaCarousel.png'
import imgPromocao1 from './img/painel1.png'
import imgPromocao3 from './img/gif5.png'
import imgPromocao2 from './img/gif3.gif'
import imgPromocao4 from './img/gif4.gif'




export default function Painel(){

    const imgPainelCarouselLista = document.getElementsByClassName('imgPainelCarousel');
    const painelButtonPrev = document.getElementsByClassName('painelButtonPrev');
    const painelButtonNext = document.getElementsByClassName('painelButtonNext');
    const painelIconIndicador = document.getElementsByClassName('painelIconIndicador');

    let imagemAtual = 0;

    function handleLeftClick(){

        if(imagemAtual > 0){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual--
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }else if(imagemAtual == 0){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual = imgPainelCarouselLista.length -1;
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }
        if (imagemAtual === 0){ painelIconIndicador[0].innerHTML = 'O o o o'} else
        if (imagemAtual === 1){ painelIconIndicador[0].innerHTML = 'o O o o'} else
        if (imagemAtual === 2){ painelIconIndicador[0].innerHTML = 'o o O o'} else 
        if (imagemAtual === 3){ painelIconIndicador[0].innerHTML = 'o o o O'}                     
    }

    function handleRightClick(){        
        if(imgPainelCarouselLista.length -1 > imagemAtual){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual++            
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }else if(imgPainelCarouselLista.length -1 == imagemAtual){
            imgPainelCarouselLista[imagemAtual].classList.remove('imgPainelCarouselMostrar');
            imagemAtual = 0;
            imgPainelCarouselLista[imagemAtual].classList.add('imgPainelCarouselMostrar');
        }                  
        if (imagemAtual == 0){ painelIconIndicador[0].innerHTML = 'O o o o'} else
        if (imagemAtual == 1){ painelIconIndicador[0].innerHTML = 'o O o o'} else
        if (imagemAtual == 2){ painelIconIndicador[0].innerHTML = 'o o O o'} else 
        if (imagemAtual == 3){ painelIconIndicador[0].innerHTML = 'o o o O'}                   
    }


    return(
        <Main id='painel'>                        
                <div className='painelCarousel'>
                    <img className='imgPainelCarousel imgPainelCarouselMostrar' src={imgPromocao1} alt="" />
                    <img className='imgPainelCarousel' src={imgPromocao2} alt="" />
                    <img className='imgPainelCarousel' src={imgPromocao3} alt="" />
                    <img className='imgPainelCarousel' src={imgPromocao4} alt="" />
                    <button className='painelButtonPrev' onClick={handleLeftClick} ><img src={SteCarousel} alt="Scroll Left" /></button>
                    <button className='painelButtonNext' onClick={handleRightClick}><img src={SteCarousel} alt="Scroll Right" /></button>
                    <button className='painelIconIndicador'>O o o o</button>
                </div>            
            <img className='setaBaixo' src={SetaImg} alt=''/>
                    
        </Main>
    )
}


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
position: relative;

`
