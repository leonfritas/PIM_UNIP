import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login-page";
import Home from "./home";
import Dashboard from "./dashboard"
import Products from './products'


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
