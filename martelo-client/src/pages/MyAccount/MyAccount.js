import React from "react";
import "../MyAccount/MyAccount.css"
import { Link } from "react-router-dom";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate";

const MyAccount = () => {
  return (
    <div>
      <div>
        <NavbarPrivate />
      </div>
      <div className="routes-in-page">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">HOME /</li>
          </Link>
          <Link to="/minha-conta" style={{ textDecoration: "none" }}>
            <li className="home"> MINHA CONTA</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MyAccount;
