import "./login.css";

import img from "../assets/images/img.gif";
import car from "../assets/images/car.gif";

import { useState } from "react";
import { Link } from "react-router-dom";




function Login() {
  /* Não permitir que o "Email" e "Senha", fique por cima do texto e quando subir não descer,
  só descer quando o campo estiver livre. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* INICIO DO CONTAINER DE LOGIN */
  return (
    <div className="container">
      <div className="container-login">
        <img src={car} alt="carrinho de compras" />
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo!!</span>
            <span className="login-form-title">
              <img src={img} alt="" />
            </span>

            <div className="wrap-input">
              <input
                className= {email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Link to= {email == "cliente"  && password == "123"?"/home" : "" ||  email == "administrador"  && password == "123"?"/dashboard" : ""}className="login-form-btn">
                Login
              </Link>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta?</span>

              <a className="txt2">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
