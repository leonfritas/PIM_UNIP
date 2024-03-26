import React from 'react'


export default function CardsReceita() {
    return (
        <div className='divCardsReceitas'>
            <a href="#receitaTop">
                <div className='cardReceita'>
                    <div className='divImgCardReceitas'>
                        <img src="https://www.nacozinhadahelo.com.br/wp-content/uploads/2022/06/receita-de-salada-de-pepino-com-tomate.jpg" alt="" />
                    </div>
                    <h4 className='titleCardReceitas'>Salada de Verão</h4>
                    <p className='textCardReceitas'>Uma salada  com Tomate, Pepino e Manjericão, refrescante e colorida, perfeita para os dias quentes de verão.</p>
                </div>
            </a>
            <a href="#receitaCenter">
                <div className='cardReceita'>
                    <div className='divImgCardReceitas'>
                        <img src="https://i.panelinha.com.br/i1/64-bk-4508-cp2022-12-08-0882.webp" alt="" />
                    </div>
                    <h4 className='titleCardReceitas'>Sopa de Abóbora Assada</h4>
                    <p className='textCardReceitas'>Uma sopa cremosa e reconfortante, feita com abóbora fresca assada e temperos aromáticos.</p>
                </div>
            </a>
            <a href="#receitaBottom">
                <div className='cardReceita'>
                    <div className='divImgCardReceitas'>
                        <img src="https://www.receiteria.com.br/wp-content/uploads/chips-assado-de-batata-doce-e-alecrim-730x548.jpeg" alt="" />
                    </div>
                    <h4 className='titleCardReceitas'>Chips de Batata Doce Assada</h4>
                    <p className='textCardReceitas'>Um petisco crocante e saudável feito com fatias finas de batata doce assadas no forno.</p>
                </div>
            </a>

        </div>

    )
}