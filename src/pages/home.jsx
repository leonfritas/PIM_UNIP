import React from 'react'
import Header from '../components/home/header'
import Painel from '../components/home/painel'
import Sobre from '../components/home/sobre'
import ComoFunciona from '../components/home/comoFunciona'
import Produtos from '../components/home/produtos'
import Contato from '../components/home/contato'
import ScrollArrow from '../components/home/ScrollArrow'
import Footer from '../components/home/footer'


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


