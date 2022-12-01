import React from "react";
import "../Navbar/Navbar.css";
import martelo from "../../img/martelo.png";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarPrivate = () => {
  return (
    <div className="navbar">
      <img classname="logo" src={martelo} alt="martelo-logo"></img>
      <div className="links" >
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">Home</li>
          </Link>
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <li className="new-account">Criar Conta</li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li className="login"> <AiOutlineUser size={20}/>LOGIN</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavbarPrivate