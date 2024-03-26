import './css/produtos.css'
import CarouselProdutos from './carouselProdutos'

export default function Produtos(){

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
              <a href='#' >
                Realizar pedido
              </a>                                          
            </div>
            <CarouselProdutos/>                                                                          
        </main>        
    )
}
