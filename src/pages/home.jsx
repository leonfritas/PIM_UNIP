import React from 'react'
import Painel from '../components/home/painel.jsx'
import Sobre from '../components/home/sobre'
import Receitas from '../components/home/receitas'
import Produtos from '../components/home/produtos'
import Header from '../components/home/header'
import ScrollArrow from '../components/home/ScrollArrow'
import Footer from '../components/home/footer'


export default function Home(){

        return(
            <>
                <Header/>
                <Painel/>
                <Sobre/>
                <Produtos/>  
                <Receitas/>                                              
                <Footer/>
                <ScrollArrow/>
            </>

        )
    }


