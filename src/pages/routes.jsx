import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login-page";
import Home from "./home";
import Dashboard from "./dashboard"
import Produtos from "./produtos"
import Financeiro from "./financeiro"
import { ThemeProvider } from "../context/ThemeContext";
import { LoginContext } from "../context/LoginContext";
import React, { useState } from 'react'


function AppRoutes() {

  const [email, setEmail] = useState("");
  const [showProfile, setShowProfile] = useState(false)

  return (
    <ThemeProvider>    
      <LoginContext.Provider value={ {setEmail, setShowProfile, email} }>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/produtos" element={<Produtos />} />
            <Route exact path="/financeiro" element={<Financeiro />} />
          </Routes>
        </BrowserRouter> 
       </LoginContext.Provider>       
   </ThemeProvider>
  );
}

export default AppRoutes;
