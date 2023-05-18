import React, { useState } from "react";
import "../LoginForm/LoginForm.css";
import api from "../../service/api.service.js";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.login({ email, password });
      navigate("/buscar-produto");
    } catch (error) {
      showMessage("E-mail ainda não cadastrado ou senha inválida!!!");
    }
  };

  return (
    <div className="message">
      {message && <p>{message}</p>}
      <div className="newLogin">
        <div className="form">
          <h4>LOGIN</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail: </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              placeholder="email@email.com.br"
              onChange={({ target }) => setEmail(target.value)}
            />

            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              placeholder="Insira sua senha"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
        </div>
        <div className="createNewAccount">
          <p>Ainda não tem uma conta?</p>
          <p>
            <Link to="/cadastro" className="registration-link">
              Clique aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
