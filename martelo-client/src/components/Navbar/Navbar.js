import React from "react";
import "../Navbar/Navbar.css";
import martelo from "../../img/martelo.png";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHolder } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img classname="logo" src={martelo} alt="martelo-logo"></img>
      <div className="links">
        <ul>
          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <li className="new-account"> {" "} <AiOutlineHolder size={20}/> CRIAR CONTA</li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li className="login">{" "} <AiOutlineUser size={20} />LOGIN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
