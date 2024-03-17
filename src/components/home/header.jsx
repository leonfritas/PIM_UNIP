import './header.css'
import { useState, useContext } from "react";
import { UserCircleIcon, Bars3Icon, MoonIcon} from "@heroicons/react/24/outline";
import  logo  from '../home/img/logoHortiFruti.png'
import { ThemeContext } from '../../context/ThemeContext'
import { LoginContext } from '../../context/LoginContext'








function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { theme , toggleTheme} = useContext(ThemeContext);
  const { email } = useContext(LoginContext);

  return (
    <main className='mainHeader'>    
    <div className={`Header ${theme === 'dark'? "dark-theme": ''}`}>
      <nav className='navHeader'>
        <div className=" max-w-7xl mx-auto">
          <div className="divHeader flex mx-auto justify-around w-5/6 ">
            <div className="flex items-center  gap-16 my-12">
              <a
                  href="/home"
                  className="flex gap-1 font-bold text-gray-700 items-center ">                                        
                  <img className="logoHeader"src={logo} alt="" />
                </a>
              <div >
                
              </div>
              <div className="hidden lg:flex gap-8 ">
                <a className="linkHeader" href="/home" >
                  Home
                </a>
                <a className="linkHeader" href="#sobre">Sobre</a>
                <a className="linkHeader" href="#produtos">Produtos</a>
                <a className="linkHeader" href="#comoFunciona">Receitas</a>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                <div>
                    <p>Olá, {email}</p>
                  </div>
                  <UserCircleIcon  className="h-6 w-6" />                                                                      
                </div>
                <div className='facaSeuPedido hidden lg:flex '>
                  <a target='_blank'  href='https://api.whatsapp.com/send?phone=5592994107470&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.' className=" buttonHeader rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Faça aqui seu pedido
                  </a>
                </div>
                <MoonIcon onClick={toggleTheme} class="moonIcon h-6 w-6 text-gray-500" />  
              </div>          
              {/* Mobile */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
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



