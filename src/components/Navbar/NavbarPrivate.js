import React from "react";
import "../Navbar/Navbar.css";
import martelo from "../../img/martelo.png";
import { Link } from "react-router-dom";

const NavbarPrivate = () => {
  return (
    <div className="navbar">
      <img className="logo" src={martelo} alt="martelo-logo"></img>
      <div className="links">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">HOME</li>
          </Link>

          <Link to="/cadastrar-produto" style={{ textDecoration: "none" }}>
            <li className="new-product">CADASTRAR PRODUTO</li>
          </Link>

          <Link to="/buscar-produto" style={{ textDecoration: "none" }}>
            <li className="new-product">BUSCAR PRODUTO</li>
          </Link>

          {/* ver se é necessário ter o link de reserva na navbar */}

          {/* <Link to="/reservar" style={{ textDecoration: "none" }}>
            <li className="rent">QUERO ALUGAR</li>
          </Link> */}

          <Link to="/minha-conta" style={{ textDecoration: "none" }}>
            <li className="rent">MINHA CONTA</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarPrivate;
