import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Carousel from "../../components/Carousel/Carousel.js";

function Home() {
  return (
    <Fragment>
      <div className="home">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="routes-in-page">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="home">HOME</li>
            </Link>
          </ul>
        </div>
        <div className="home-first-wide">
          <div className="home-text">
            <h1>Aqui você encontra o equipamento para o seu projeto.</h1>
            <h3>
              E também pode alugar aquele seu equipamento parado em casa e faturar
              uma graninha.
            </h3>
          </div>
          <div className="home-button">
            <div id="button">
              <Link
                to="/cadastro"
                style={{ textDecoration: "none", color: "white" }}
              >
                CADASTRE-SE AGORA
              </Link>
            </div>
            <div className="home-login">
              <p>Já possui cadastro? </p>
              <p>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Clique aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="carouselImages">
          <Carousel />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
