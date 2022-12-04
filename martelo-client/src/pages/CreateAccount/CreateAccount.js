import React from "react";
import "../CreateAccount/CreateAccount.css"
import Navbar from "../../components/Navbar/Navbar.js";
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <div className="routes-in-page">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="home">HOME /</li>
        </Link>
        <Link to="/criar-conta" style={{ textDecoration: "none" }}>
          <li className="home"> CRIAR CONTA</li>
        </Link>
      </ul>
    </div>
  </div>
  );
};

export default CreateAccount;
