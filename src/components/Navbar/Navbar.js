import React from "react";
import martelo from "../../img/martelo.png";
import "./Navbar.css";

const Navbar = () => {
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
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/cadastro">Criar Conta</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
