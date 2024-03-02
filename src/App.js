import React from "react";
import './App.css'
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
*{
  margin:0;
  padding:0;
  list-style-type: none;
  text-decoration: none;
  color: black;
  
}

html{
  scroll-behavior: smooth;
}

`

export default App;