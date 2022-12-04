import React from "react";
import { useState } from "react";
import "../LoginForm/LoginForm.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLogin = {
      email,
      password,
    };

    await axios.post("link do deploy do server", newLogin);
    navigate("/buscar-produto");
  };

  return (
    <div className="newLogin">
      <div className="form">
        <h4>LOGIN</h4>
        <form onSubmit={handleSubmit}>
          <label>E-mail: </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* arrumar para o passwordHash e verificação de senha | trocar a visualização da senha para pontinhos */}

          <label>Senha: </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <div className="createNewAccount">
        <p>Ainda não tem uma conta? </p>
        <ul>
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <li>Clique aqui</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
