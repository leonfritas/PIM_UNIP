import React from "react";
import './components/App.css'
import { createGlobalStyle } from 'styled-components'
import AppRoutes from "./pages/routes";


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