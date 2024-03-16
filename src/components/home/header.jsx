import './header.css'

import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import  logo  from '../home/img/logoHortiFruti.png'

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <main className='mainHeader'>
    <div className="Header ">
      <nav className='navHeader'>
        <div className=" max-w-7xl mx-auto">
          <div className="divHeader flex mx-auto justify-around w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center  gap-16 my-12">
              {/* logo */}
              <a
                  href="/home"
                  className="flex gap-1 font-bold text-gray-700 items-center ">                                        
                  <img className="logoHeader"src={logo} alt="" />
                </a>
              <div >
                
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a className="linkHeader" href="/home" >
                  Home
                </a>
                <a className="linkHeader" href="#sobre">Sobre</a>
                <a className="linkHeader" href="#produtos">Produtos</a>
                <a className="linkHeader" href="#comoFunciona">Receitas</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div className='facaSeuPedido hidden lg:flex '>
                  <a target='_blank'  href='https://api.whatsapp.com/send?phone=5592994107470&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.' className=" buttonHeader rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Faça aqui seu pedido
                  </a>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`menuResponsivo fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className=" px-8 ">
            <div className="  flex flex-col gap-6 font-bold tracking-wider">
              <a onClick={() => setToggleMenu(!toggleMenu)} href="/home" >Home</a>
              <a onClick={() => setToggleMenu(!toggleMenu)} href="#sobre">Sobre</a>
              <a onClick={() => setToggleMenu(!toggleMenu)} href="#produtos">Produtos</a>
              <a onClick={() => setToggleMenu(!toggleMenu)} href="#comoFunciona">Receitas</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </main>
  );
}

export default Nav;


// import React from 'react'
// import Logo2 from './img/logoHortiFruti.png'
// import styled, { keyframes} from 'styled-components'
// import { useState, useEffect } from 'react'
// import './header.css'


// export default function Header(){

//     const [header, setHeader] = useState(false);

//     // Função disparada quando o scroll inicia
//     useEffect(() => {
//         const handleHeader = ()=>{
//             const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//             setHeader(scrollPosition > 0)
//         }

//         window.addEventListener('scroll', handleHeader);
//         return() => {
//             window.removeEventListener('scroll', handleHeader)
//         }
//     }, [])


//     return(
//         // <HeaderDiv className={`${header ? '' : 'visible'}`}>
//         <HeaderDiv>
//             <DivLogo className='divLogo'> 
//                 <a href='#painel'><img className="logoHortiFruti" src={Logo2}/></a>
//             </DivLogo>
//             <nav className='nav'>
//                 <Ul className='menu'> 
//                     {/* <a href='#sobre'><Li className={`${header ? 'visible' : ''}`}> Sobre nós</Li></a>
//                     <a href='#produtos'><Li className={`${header ? 'visible' : ''}`}>Produtos</Li></a>
//                     <a href='#comoFunciona'><Li className={`${header ? 'visible' : ''}`}>Receitas e Dicas</Li></a> */}
//                     <a className="linkHeader" href='#sobre'><Li> Sobre nós</Li></a>
//                     <a className="linkHeader" href='#produtos'><Li>Produtos</Li></a>
//                     <a className="linkHeader" href='#comoFunciona'><Li>Receitas e Dicas</Li></a>
                   
//                     <a className="linkHeaderPedido" target='_blank'  href='https://api.whatsapp.com/send?phone=5592994107470&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'><Li>Faça seu pedido aqui</Li></a>
//                 </Ul>
//             </nav>
//         </HeaderDiv>
//     )
// }


// const fadeIn = keyframes`
// 0% {
//   opacity: 0;
//   transform: translateY(-10px);
// }
// 100% {
//   opacity: 1;
//   transform: translateY(0);
// }
// `;



// const Li = styled.li`
// transition: 100ms ease-in-out;
// padding: 10px 15px;
// border-radius: 25px;

//     &.visible {
//         margin: 5px;
//         padding: 5px 10px;
//         border-radius: 25px;
//       }

 
// }
// `;


// const HeaderDiv = styled.header`
//     position: fixed;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;    
//     height: 50px;
//     z-index: 1;
//     opacity:1;
//     transition: opacity 0.3s ease, visibility 0.3s ease;
//     background: #f5f5f5;
//     // background: #8CC84B;
    

//     &.visible {
//         opacity: 0.2;
//         background-color: #f5f5f5;
//         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//         height: 60px;
//       }
    
//     &:hover {
//         opacity: 1;     


// `

// const Ul = styled.ul`

// display: flex;
// gap: 5px;
// font-size: 20px;
// margin-right: 100px;`




// const DivLogo = styled.div`

// height: 100%;
// margin-left: 100px;
// display: flex;
// align-items: center;
// justify-content: flex-start;

// `











