import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
 
 * {
   
    margin: 0;
    padding: 0;
    font-family: "Montserrat", 'sans-serif' ;
    
 }

 body {
    width:100vw;
    height: 100vh
    display: flex;
    justify-content: center;
    background-color: #1d2634;
    color:white;
    overflow:auto
 }
`

export default GlobalStyle