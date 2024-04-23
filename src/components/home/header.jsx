import './css/header.css'
import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserCircleIcon, Bars3Icon } from "@heroicons/react/24/outline";
import  logo  from '../home/img/logoHortiFruti.png'
import { ThemeContext } from '../../context/ThemeContext'
import { LoginContext } from '../../context/LoginContext'
import iconWpp from '../home/img/iconWpp.png'



export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { theme , toggleTheme} = useContext(ThemeContext);
  const { email } = useContext(LoginContext);
  const [light, setLight] = useState(true)
  const [scrollTop, setScrollTop] = useState(true)
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate(0)
  }

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  window.addEventListener('scroll', handleScroll);

  const navBar = document.getElementsByClassName('Header');


  function handleScroll(){
    const scrollY = window.pageYOffset; 
    if(scrollY > 700){
      navBar[0].classList.add('HeaderScroll')
      setScrollTop(false)      
    }
    else if(scrollY < 700 && scrollTop === false){
      navBar[0].classList.remove('HeaderScroll')
      navBar[0].style = '' 
      setScrollTop(true)
      
    }

    if(scrollY > 100){setToggleMenu(false)}
  }




  return (
    <main className='mainHeader'>    
      <div id='test' className={`Header ${theme === 'dark'? "dark-theme": ''}`}>     
        <nav className='navHeader'>      
          <div className=" max-w-7xl mx-auto">
            <div className="divHeader flex mx-auto justify-around w-5/6 ">
              <div className="flex items-center  gap-16 my-12">
                <a
                    href="/"
                    className="flex gap-1 font-bold text-gray-700 items-center ">                                        
                    <img className="logoHeader"src={logo} alt="" />
                  </a>
                <div >
                  
                </div>
                <div className="hidden lg:flex gap-8 ">
                  <a className="linkHeader" href="#painel" >
                    Home
                  </a>
                  <a className="linkHeader" href="#sobre">Sobre</a>
                  <a className="linkHeader" href="#produtos">Produtos</a>
                  <a className="linkHeader" href="#receitas">Receitas</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="hidden xs:flex items-center gap-10">
                  <div className="hidden lg:flex items-center gap-2">
                                                                                        
                  </div>
                  <div className='facaSeuPedido hidden lg:flex '>                
                                  
                  </div>
                  <div className='themeIcon ' onClick={() => setLight(!light)}>                                
                    {email === ''?
                    <Link to='/login' >  
                      <button className="BtnEntrar">                  
                          Entrar    
                      </button>               
                    </Link>
                    :
                    <div className='divSaudacaoHeader' >
                      
                      
                      <UserCircleIcon  className="iconUser  h-6 w-6"/>  
                      {email !== ''?<p>Olá, {email}</p>:''}        
                    </div>
                    }

                    {/*
                    // <Link onClick={refreshPage}>
                    //   <button class=Name"BtnEntrar">                
                    //       Sair
                    //   </button>
                    // </Link>*/}
                      
                      {/* {light?<SunIcon onClick={toggleTheme} className="h-6 w-6 text-gray-500" />:<MoonIcon  onClick={toggleTheme} className="h-6 w-6 text-gray-500" />}                    */}
                  </div>  
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
          <div className='divMenuResponsivo'>
            <div
              className={`menuResponsivo fixed    bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
                !toggleMenu ? "h-0" : "h-full"
              }`}
            >
              <div className=" px-8 ">
                <div className= "menuResponsivoItens  flex flex-col gap-4 font-bold tracking-wider">
                  <a onClick={() => setToggleMenu(!toggleMenu)} href="#painel" >Home</a>
                  <a onClick={() => setToggleMenu(!toggleMenu)} href="#sobre">Sobre</a>
                  <a onClick={() => setToggleMenu(!toggleMenu)} href="#produtos">Produtos</a>
                  <a onClick={() => setToggleMenu(!toggleMenu)} href="#receitas">Receitas</a>
                  {email === '' ?<Link to='./login'> <a onClick={() => setToggleMenu(!toggleMenu)} href="#painel" >Entrar</a></Link> 
                  :  <a onClick= {refreshPage} href="#painel">Sair</a>
                  }               
                </div>
              </div>
            </div>  
          </div>
        </nav>
        <div className='relative'>
          {email !== ''?
          <div  onMouseEnter={handleMouseEnter}                                                                        
                              onMouseLeave={handleMouseLeave}
                              className="dropdown-menu">                      
                          {isDropdownVisible &&
                          <div className='dropDownList'>
                            <ul >
                              <li>Editar perfil</li>
                              <li>Menu 2</li>
                              <li onClick={refreshPage}>Sair</li>
                            </ul>
                          </div>
                          }  
          </div>:''}  
        </div>
      </div>
      {
        scrollTop ? '' 
        :
        <div className='iconWpp'>
          <img src={iconWpp} alt="" />
        </div>
      }
      
      
    </main>
  );
}





