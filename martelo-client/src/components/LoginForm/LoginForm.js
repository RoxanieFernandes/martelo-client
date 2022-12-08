import React from "react";
import { useState } from "react";
import "../LoginForm/LoginForm.css";
import api from "../../service/api.service.js";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.login({ email, password });
      navigate("/buscar-produto");
    } catch (error) {
      showMessage(`${error.toUpperCase()}!!!`);
    }
  };

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="newLogin">
      {message !== "" && <p>{message}</p>}
      <div className="form">
        <h4>LOGIN</h4>
        <form onSubmit={handleSubmit}>
          <label>E-mail: </label>
          <input
            type="email"
            required
            value={email}
            placeholder="email@email.com.br"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Senha: </label>
          <input
            type="password"
            required
            value={password}
            placeholder="Insira sua senha"
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
