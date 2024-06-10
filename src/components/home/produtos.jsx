import React, { useState, useRef, useContext } from 'react'
import './css/produtos.css'
import carrinho from './img/carEdit.gif'
import './css/finalizarPedidoCartao.css'
import { CheckIcon, XMarkIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { LoginContext } from '../../context/LoginContext'
import produtoAbacaxi from './imgHortifruti/produtoAbacaxi.jpeg'
import produtoMelancia from './imgHortifruti/produtoMelancia.jpeg'
import produtoTomate from './imgHortifruti/produtoTomate.jpeg'
import produtoLimao from './imgHortifruti/produtoLimao.jpeg'
import produtoMamao from './imgHortifruti/produtoMamao.jpeg'
import produtoBanana from './imgHortifruti/produtoBanana.jpeg'
import produtoAbobora from './imgHortifruti/produtoAbobora.jpeg'
import produtoMacaxeira from './imgHortifruti/produtoMacaxeira.jpeg'
import produtoBatata from './imgHortifruti/produtoBatata.jpeg'
import produtoAlho from './imgHortifruti/produtoAlho.jpeg'
import produtoManga from './imgHortifruti/produtoManga.jpeg'
import produtoLaranja from './imgHortifruti/produtoLaranja.jpeg'




export default function Produtos(){

    let [data, setData] = useState([])
    const carousel = useRef(null)    
    const [valorTotal, setValorTotal] = useState(0)
    const [finalizarPedido, setFinalizarPedido] = useState(false)
    const { email } = useContext(LoginContext);

    let carrinhoListaDinamicaLegendas = document.getElementsByClassName('carrinhoListaDinamicaLegendas')
    let carrinhoListaDinamicaValores = document.getElementsByClassName('carrinhoListaDinamicaValores')


    const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  
    data = [

      {
          "id": "1",
          "name": "Abacaxi",
          "image": `${produtoAbacaxi}`,
          "price": "10",
          "oldPrice": "15"
      },
      {
          "id": "2",
          "name": "Tomate",
          "image": `${produtoTomate}`,
          "price": "5",
          "oldPrice": "10"
      },
      {
          "id": "3",
          "name": "Limão",
          "image": `${produtoLimao}`,
          "price": "5",
          "oldPrice": "8"
      },
      {
          "id": "4",
          "name": "Mamão",
          "image": `${produtoMamao}`,
          "price": "8",
          "oldPrice": "9"
      },
      {
          "id": "5",
          "name": "Banana",
          "image": `${produtoBanana}`,
          "price": "10",
          "oldPrice": "12"
      },
      {
          "id": "6",
          "name": "Abóbora",
          "image": `${produtoAbobora}`,
          "price": "5",
          "oldPrice": "6"
      },
      {
        "id": "7",
        "name": "Macaxeira",
        "image": `${produtoMacaxeira}`,
        "price": "8",
        "oldPrice": "10"
      },
      {
        "id": "8",
        "name": "Batata",
        "image": `${produtoBatata}`,
        "price": "200",
        "oldPrice": "20"
      },
      {
        "id": "9",
        "name": "Alho",
        "image": `${produtoAlho}`,
        "price": "200",
        "oldPrice": "20"
      },
      {
        "id": "10",
        "name": "Manga",
        "image": `${produtoManga}`,
        "price": "200",
        "oldPrice": "20"
      },
      {
        "id": "11",
        "name": "Laranja",
        "image": `${produtoLaranja}`,
        "price": "200",
        "oldPrice": "20"
      },
      {
        "id": "12",
        "name": "Melancia",
        "image": `${produtoMelancia}`,
        "price": "200",
        "oldPrice": "20"
      }
    ]

    function limparLista(){
      carrinhoListaDinamicaValores[0].innerHTML = ''
      carrinhoListaDinamicaLegendas[0].innerHTML = ''
      setValorTotal(0)
    }

    function verificarUsuarioLogado(){
      if(email !== ''){
        setFinalizarPedido(true)
      } else if(email === ''){
        alert('Atenção: É necessário fazer login para fazer um pedido.')
      }      
    }
  

    return(
        <main id='produtos'> 
          <div className='divHeaderProdutos'>
              <div  className='tituloProdutos'>
                <h2>
                  Sabor da Natureza em sua Mesa
                </h2>
                <h3>
                  Uma seleção saudável e saborosa para sua dieta diária.
                </h3>  
              </div>
                                           
            </div>
            <div className='divTop' >  
              <ArrowLongLeftIcon className="ArrowLongLeftIcon  text-gray-500" />
              <ArrowLongRightIcon className="ArrowLongRightIcon text-gray-500" />                
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
                        <button onClick={()=> {
                          setValorTotal(parseInt(valorTotal) + parseInt(price))
                          carrinhoListaDinamicaLegendas[0].innerHTML += `<p>${name}</p>`
                          carrinhoListaDinamicaValores[0].innerHTML += `<p>${price}</p>`
                          }} className='price'>{price}</button>
                      </div>
                    </div>
                  ) 
                })} 
                
              </div>
              
              <div className='carrinho'>
               
                <div className='carrinhoDivLista'>
                  <div className='carrinhoDivListaLegendas'>
                    <h3>Lista de compras</h3>   
                    
                    <div className='carrinhoListaDinamicaLegendas'>
                      {/* {valorTotal === 0? 'Lista vazia': ''} */}

                    </div> 
                    
                    <p>Total</p>                                     
                  </div>   
                  <div className='carrinhoDivListaValores'>  
                    <div className='carrinhoListaDinamicaValores'>
                    

                    </div>                                     
                    <p>{valorTotal}</p> 
                  </div>  
                
                    
                </div>
                <div>
                  {valorTotal > 1?<button className='limparLista' onClick={limparLista}>Esvaziar lista</button>: ''}
                  {valorTotal > 1?<button onClick={verificarUsuarioLogado}  className='realizarPedido' >Realizar pedido</button> : ''}

                </div>
                 
                <div className='carrinhoDivImg'>
                  <img src={carrinho} alt="" />
                </div>              
              </div>
              
              {/* <div className='buttons'> */}
                <button className='buttonPrev' onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                <button className='buttonNext' onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
              {/* </div> */}
                        
            </div>         
            {finalizarPedido === true?        
            <div id="finalizarPedido">              
              <button onClick={() => setFinalizarPedido(false)}className="FPbotaoFechar">X</button>
              <header className='FPHeader'><h2>Dados do cartão</h2></header>
              <div className='FPDadosDoCartao'>
                <label htmlFor="">Nome do Titular</label>
                <input type="text" />
                <label htmlFor="">CPF do Titular</label>
                <input type="text" />
                <label htmlFor="">Número do Cartão</label>
                <input type="text" />

              </div>
              
              <div className='FPButtons'>
                <a><XMarkIcon className="h-6 w-6 " />Sair</a>
                <a><CheckIcon className="h-6 w-6 " />Realizar Pagamento</a>
              </div>
            </div>: ''}                                                   
        </main>        
    )
}


