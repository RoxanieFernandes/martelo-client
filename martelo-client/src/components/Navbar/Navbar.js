import React from "react";
import "../Navbar/Navbar.css";
import martelo from "../../img/martelo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img classname="logo" src={martelo} alt="martelo-logo"></img>
      <div>
        <ul>
          <Link to="/">
            <li className="home">Home</li>
          </Link>
          <Link to="/cadastro">
            <li className="new-account">Criar Conta</li>
          </Link>
          <Link to="/login">
            <li className="login">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
