import React from 'react'
import './painelDashboard.css'
// import bgDashboard from '../assets/images/bgDashboard.png'



export default function Painel(){
    return(
        <>
            <main className='painelDashboard'>
                <nav className='divMenuDashboard'>
                    <ul className='menuDashboard'>
                    <a href=""><li>Vendas</li></a>
                    <a href=""><li>Despesas</li></a>
                    <a href=""><li>Resumo Financeiro</li></a>
                    </ul>
                </nav>
            </main>
        </>



    )}