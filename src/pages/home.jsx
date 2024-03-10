import React from 'react'
import Header from '../components/header'
import Painel from '../components/painel'
import Sobre from '../components/sobre'
import ComoFunciona from '../components/comoFunciona'
import Produtos from '../components/produtos'
import Contato from '../components/contato'
import ScrollArrow from '../components/ScrollArrow'
import Footer from '../components/footer'

export default function Home(){

        return(
            <>
                <Header/>
                <Painel/>
                <Sobre/>
                <Produtos/>
                <ComoFunciona/>                
                <Footer/>
                <ScrollArrow/>

            </>

        )
    }


