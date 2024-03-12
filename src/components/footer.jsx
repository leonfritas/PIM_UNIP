import styled from 'styled-components'
import boneco from '../assets/images/boneco.png'
import logoInstagram from '../assets/images/logoInstagram.png'
import logoFacebook from '../assets/images/logoFacebook.png'
import './footer.css'


export default function Footer(){
    return(
        <Main id='footer'> 
            <div className='div'>
                <Img src={boneco}/>
            </div>
            <div>
                <p>
                    Contato: 9999-9999
                </p>
                <p>
                    email: eeeee@eeee.com                    
                </p>
                <p>
                    exemplo: exemplo123
                </p>
                <img className='logoRede' src={logoInstagram} alt="" />
                <img className='logoRede' src={logoFacebook} alt="" />
            </div>
        </Main>
    )
}

const Main = styled.main`

height: 50vh;
display: flex;
align-items: flex-end;
justify-content: center;
background-color: #696969;
align-items: center;

`

const Img = styled.img`
// height: 300px;
width: 80%;`


