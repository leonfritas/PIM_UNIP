import './css/sobre.css'
import fotoHortifrutiFachada from './imgHortifruti/fotoHortifrutiFachada.jpeg'
import fotoHortifruti1 from './imgHortifruti/fotoHortifruti1.jpeg'
import fotoHortifruti2 from './imgHortifruti/fotoHortifruti2.jpeg'
import fotoHortifruti3 from './imgHortifruti/fotoHortifruti3.jpeg'
import fotoHortifruti4 from './imgHortifruti/fotoHortifruti4.jpeg'
import fotoHortifruti5 from './imgHortifruti/fotoHortifruti5.jpeg'
import fotoHortifruti6 from './imgHortifruti/fotoHortifruti6.jpeg'
import fotoHortifruti7 from './imgHortifruti/fotoHortifruti7.jpeg'


export default function Sobre(){
    return(
        <main id='sobre'>             
            <div className='divConteudo'>
                <div className='textosSobre'>
                    <div className='sobreDiv'>  
                        <div className='textoSobre'>
                            <h2 className='titulo'>Um pouco sobre nós</h2>
                            <p className='texto'>
                                Bem-vindo ao Hortifruti Frescura Natural, onde cultivamos a qualidade, o frescor e a saúde em cada fruta, verdura e legume que oferecemos. Nossa jornada começou há mais de duas décadas, quando um grupo de apaixonados por agricultura e alimentação saudável decidiu unir forças para criar um espaço que refletisse seus valores e visão.
                            </p> 

                        </div>
                          
                        <img src={fotoHortifrutiFachada} alt="" />                                                                                         
                    </div>                    
                    <div className='sobreDiv sobreDivReverse'>
                        
                        <img src={fotoHortifruti3} alt="" />
                        <div className='textoSobre'>
                            <h2 className='titulo'>Nosso Propósito</h2>
                            <p className='texto'>                            
                                Acreditamos que uma alimentação saudável é a base para uma vida plena. Nosso propósito é proporcionar a você e sua família acesso fácil a alimentos frescos, nutritivos e saborosos. Queremos ser mais do que um hortifrúti; queremos ser seu parceiro na busca por um estilo de vida saudável e equilibrado.
                            </p>  
                        </div>
                                              
                    </div> 
                    <div className='sobreDiv'>
                        <img className="imgHortifruti"src={fotoHortifruti4} alt="" />      
                        <img className="imgHortifruti"src={fotoHortifruti5} alt="" /> 
                    </div>
                    <h2 className='titulo'>Nosso Hortifruti em Fotos</h2>
                    <div className='sobreDiv sobreDivWrap'>
                        <img className="imgHortifruti"src={fotoHortifruti6} alt="" />      
                        <img className="imgHortifruti"src={fotoHortifruti2} alt="" /> 
                        <img className="imgHortifruti"src={fotoHortifruti1} alt="" />      
                        <img className="imgHortifruti"src={fotoHortifruti7} alt="" />
                    </div> 

                </div>                            
            </div>
        </main>
    )
}