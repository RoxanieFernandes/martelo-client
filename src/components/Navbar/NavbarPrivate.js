import React from "react";
import martelo from "../../img/martelo.png";
import "../Navbar/Navbar.css";

const NavbarPrivate = () => {
  return (
    <div className="navbar">
      <img className="logo" src={martelo} alt="martelo-logo"></img>
      <button
        className="hamburger-button"
        aria-label="Abrir menu"
        aria-expanded="false"
      >
        <span className="hamburger-icon"></span>
      </button>
      <ul className="nav-links">
        <li>
          <a href="/cadastrar-produto">Cadastrar Produto</a>
        </li>
        <li>
          <a href="/buscar-produto">Buscar Produto</a>
        </li>
        <li>
          <a href="/minha-conta">Minha Conta</a>
        </li>
        <li>
          <a href="/"><b>Sair</b></a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarPrivate;
