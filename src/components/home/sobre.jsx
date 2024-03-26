import './css/sobre.css'
import imgSobre from '../home/img/imgSobre.png'


export default function Sobre(){
    return(
        <main id='sobre'>             
            <div className='divConteudo'>
                
                <div className='textosSobre'>
                    <div className='textoEsquerda'>
                        <div>
                        <h2 className='titulo'>Um pouco sobre nós</h2>
                        <p className='texto'>
                            Bem-vindo ao Hortifruti Frescura Natural, onde cultivamos a qualidade, o frescor e a saúde em cada fruta, verdura e legume que oferecemos. Nossa jornada começou há mais de duas décadas, quando um grupo de apaixonados por agricultura e alimentação saudável decidiu unir forças para criar um espaço que refletisse seus valores e visão.
                        </p>    
                        </div>
                        <div>
                        <h2 className='titulo'>Nosso Propósito</h2>
                        <p className='texto'>                            
                            Acreditamos que uma alimentação saudável é a base para uma vida plena. Nosso propósito é proporcionar a você e sua família acesso fácil a alimentos frescos, nutritivos e saborosos. Queremos ser mais do que um hortifrúti; queremos ser seu parceiro na busca por um estilo de vida saudável e equilibrado.
                        </p>
                        </div>
                    </div>                                                                                          
                    <div className='textoDireita'>   
                        <h2 className='titulo' >Frutas e Vegetais Frescos: Do Campo à sua Mesa</h2>                   
                        <img src={imgSobre} alt="" /> 
                    </div>
                                    
                                 
                </div>                            
            </div>
        </main>
    )
}