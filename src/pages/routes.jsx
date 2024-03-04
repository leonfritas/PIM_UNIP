import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login-page";
import Home from "./home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
