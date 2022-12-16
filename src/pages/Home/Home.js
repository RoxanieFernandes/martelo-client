import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar.js";
import Carousel from "../../components/Carousel/Carousel.js";
import { Link } from "react-router-dom";


const Home = () => {
  return (
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
      <div className="carouselImages">
        <Carousel />
      </div>

      <div className="second-foot">
        <h1>Tem algum equipamento parado?</h1>
        <h3>Alguém pode estar procurando por ele.</h3>
      </div>

       </div>
  );
};

export default Home;
