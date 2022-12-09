import React from "react";
import "../CreateAccountForm/CreateAccountForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api.service.js";

const CreateAccountForm = (props) => {
  const [name, setName] = useState("");
  const [socialName, setSocialName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

    try {
      console.log(newAccount)
      await api.signup(newAccount);
      navigate("/login");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="newAccount">
      <div className="formAccount">
        <h4>CRIAR CONTA</h4>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
          <select className="neighborhood"
           onChange=
           {(e) => {
             console.log(e.target.value)
             setAddress(e.target.value);
           }}>
            <option value="Água Rasa">Água Rasa</option>
            <option value="alto de pinheiros">Alto de Pinheiros</option>
            <option value="anhanguera">Anhanguera</option>
            <option value="aricanduva">Aricanduva</option>
            <option value="artur alvim">Artur Alvim</option>
            <option value="barra funda">Barra Funda</option>
            <option value="Bela Vista">Bela Vista</option>
            <option value="belem">Belém</option>
            <option value="bom retiro">Bom Retiro</option>
            <option value="bras">Brás</option>
            <option value="brasilandia">Brasilândia</option>
            <option value="butanta">Butantã</option>
            <option value="cachoeirinha">Cachoeirinha</option>
            <option value="cambuci">Cambuci</option>
            <option value="campo belo">Campo Belo</option>
            <option value="campo grande">Campo Grande</option>
            <option value="campo limpo">Campo Limpo</option>
            <option value="Cangaíba">Cangaíba</option>
            <option value="Capão Redondo">Capão Redondo</option>
            <option value="Cidade Dutra">Cidade Dutra</option>
            <option value="Carrão">Carrão</option>
            <option value="Casa Verde">Casa Verde</option>
            <option value="Cidade Ademar">Cidade Ademar</option>
            <option value="Cidade Líder">Cidade Líder</option>
            <option value="Cidade Tiradentes">Cidade Tiradentes</option>
            <option value="Consolação">Consolação</option>
            <option value="Ermelino Matarazzo">Ermelino Matarazzo</option>
            <option value="Freguesia do Ó">Freguesia do Ó</option>
            <option value="Grajaú">Grajaú</option>
            <option value="Guaianases">Guaianases</option>
            <option value="Ipiranga">Ipiranga</option>
            <option value="Itaim Bibi">Itaim Bibi</option>
            <option value="Itaim Paulista">Itaim Paulista</option>
            <option value="Itaquera">Itaquera</option>
            <option value="Jabaquara">Jabaquara</option>
            <option value="Jaçanã">Jaçanã</option>
            <option value="Jaguara">Jaguara</option>
            <option value="Jaguaré">Jaguaré</option>
            <option value="Jaraguá">Jaraguá</option>
            <option value="Jardim Ângela">Jardim Ângela</option>
            <option value="Jardim Helena">Jardim Helena</option>
            <option value="Jardim Paulista">Jardim Paulista</option>
            <option value="Jardim São Luís">Jardim São Luís</option>
            <option value="José Bonifácio">José Bonifácio</option>
            <option value="Lajeado">Lajeado</option>
            <option value="Lapa">Lapa</option>
            <option value="Liberdade">Liberdade</option>
            <option value="Limão">Limão</option>
            <option value="M'Boi Mirim">M'Boi Mirim</option>
            <option value="Mandaqui">Mandaqui</option>
            <option value="Marsilac">Marsilac</option>
            <option value="Moema">Moema</option>
            <option value="Moóca">Moóca</option>
            <option value="Morumbi">Morumbi</option>
            <option value="Parelheiros">Parelheiros</option>
            <option value="Pari">Pari</option>
            <option value="Parque do Carmo">Parque do Carmo</option>
            <option value="Pedreira">Pedreira</option>
            <option value="Penha">Penha</option>
            <option value="Perdizes">Perdizes</option>
            <option value="Perus">Perus</option>
            <option value="Pinheiros">Pinheiros</option>
            <option value="Pirituba">Pirituba</option>
            <option value="Ponte Rasa">Ponte Rasa</option>
            <option value="Raposo Tavares">Raposo Tavares</option>
            <option value="República">República</option>
            <option value="Rio Pequeno">Rio Pequeno</option>
            <option value="Sacomã">Sacomã</option>
            <option value="Santa Cecília">Santa Cecília</option>
            <option value="Santana">Santana</option>
            <option value="Santo Amaro">Santo Amaro</option>
            <option value="São Domingos">São Domingos</option>
            <option value="São Lucas">São Lucas</option>
            <option value="São Mateus">São Mateus</option>
            <option value="São Miguel">São Miguel</option>
            <option value="São Rafael">São Rafael</option>
            <option value="Sapopemba">Sapopemba</option>
            <option value="Saúde">Saúde</option>
            <option value="Sé">Sé</option>
            <option value="Socorro">Socorro</option>
            <option value="Tatuapé">Tatuapé</option>
            <option value="Tremembé">Tremembé</option>
            <option value="Tucuruvi">Tucuruvi</option>
            <option value="Vila Andrade">Vila Andrade</option>
            <option value="Vila Curuçá">Vila Curuçá</option>
            <option value="Vila Formosa">Vila Formosa</option>
            <option value="Vila Guilherme">Vila Guilherme</option>
            <option value="Vila Jacuí">Vila Jacuí</option>
            <option value="Vila Leopoldina">Vila Leopoldina</option>
            <option value="Vila Maria">Vila Maria</option>
            <option value="Vila Mariana">Vila Mariana</option>
            <option value="Vila Matilde">Vila Matilde</option>
            <option value="Vila Medeiros">Vila Medeiros</option>
            <option value="Vila Prudente">Vila Prudente</option>
            <option value="Vila Sônia">Vila Sônia</option>
           
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
        {error && <p> {error} </p>}
      </div>
    </div>
  );
};

export default CreateAccountForm;
