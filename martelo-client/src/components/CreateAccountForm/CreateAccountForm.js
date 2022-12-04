import React from "react";
import "../CreateAccountForm/CreateAccountForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = (props) => {
  const [name, setName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAccount = {
      name,
      socialName,
      address,
      email,
      password,
    };

    await axios.post("trocar pelo link do deploy do server", newAccount);
    navigate("/login");
  };

  return (
    <div className="newAccount">
      <div className="formAccount">
        <h4>CRIAR CONTA</h4>
        <form onSubmit={handleSubmit}>
          <label>Nome: </label>
          <input
            type="text"
            required
            value={name}
            placeholder="Nome completo"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Nome Social: </label>
          <input
            type="text"
            value={socialName}
            placeholder="Como gostaria de ser chamado"
            onChange={(e) => {
              setSocialName(e.target.value);
            }}
          />

          <label>Selecione seu bairro: </label>

          {/* completar a lista de bairro e verificar se existe uma maneira de inserir varios bairros de uma vez */}

          <select className="neighborhood">
            <option value="se">Sé</option>
            <option value="bom retiro">Bom Retiro</option>
            <option value="cambuci">Cambuci</option>
            <option value="consolacao">Consolação</option>
            <option value="liberdade">Liberdade</option>
            <option value="republica">República</option>
            <option value="santa cecilia">Santa Cecília</option>
            <option value="consolacao">Consolação</option>
            onChange=
            {(e) => {
              setAddress(e.target.value);
            }}
          </select>

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

          {/* arrumar para o passwordHash e verificação de senha | trocar a visualização da senha para pontinhos */}

          <label>Senha: </label>
          <input
            type="password"
            required
            value={password}
            placeholder="Cadastre uma nova senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountForm;
