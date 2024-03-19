
import React, { useEffect, useState, useRef } from 'react'
import './css/produtos.css'

import receita1 from './img/produto1.jpg'



export default function Produtos(){

    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() =>{
      fetch('http://localhost:3000/static/itensCarousel.json')
      .then((response) => response.json())
      .then(setData)
    }, [])

    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }


    const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    if(!data || !data.length) return null;


    return(
        <main id='produtos'> 
            <div className='divTop' >
              {/* <div className='logo'>
                <img src={receita1} alt="teste" />
              </div> */}
              <div className='carousel' ref={carousel}>

                {data.map((item) => {  
                  const {id, name, price, oldPrice, image} = item;
                  return(
                    <div className='item' key={id}>
                      <div className='image'>
                        <img src={image} alt={name} />
                      </div>
                      <div className='info'>
                        <span className='name'>{name}</span>
                        <span className='oldPrice'>{oldPrice}</span>
                        <span className='price'>{price}</span>
                      </div>
                    </div>
                  ) 
                })}
              </div>
              <div className='buttons'>
                <button onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                <button onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
              </div>
                        
            </div>           
            <div>
              <h2>Alimentação Saudável: Um Cuidado Diário com Você Mesmo</h2>
              <p>
              Comer saudável é um ato de amor próprio, um compromisso diário que nutre não apenas o corpo, mas também a mente. Ao escolher alimentos frescos e equilibrados, estamos proporcionando ao nosso organismo os nutrientes essenciais para um funcionamento ótimo.
              </p>            
            </div>                                          
        </main>        
    )
}



// const H2 = styled.h2`
// font-size: 200%;
// color: white;`


// const DivTexto = styled.div`
// width: 40%;
// background-color: #5f9ea0;
// max-height: 80%;
// padding: 50px;
// border-radius: 20px;
// font-size: 100%
// font-weight: 500;
// text-align: justify;

// `

