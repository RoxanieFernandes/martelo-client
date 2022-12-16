import React from "react";
import "../Login/Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm.js";

const Login = () => {
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
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li className="home"> LOGIN</li>
          </Link>
        </ul>
      </div>

      <div className="loginCard">
        <LoginForm/>        
      </div>
    </div>
  );
};

export default Login;
