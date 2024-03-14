import React from "react";
import './components/App.css'
import { createGlobalStyle } from 'styled-components'
import AppRoutes from "./pages/routes";
import roboto from '../src/assets/fonts/Roboto-Medium.ttf'



function App() {
  return (
    <div >
     <GlobalStyle/>

      <AppRoutes/>

 
    </div>
      
    
  );
}



const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

`

export default App;