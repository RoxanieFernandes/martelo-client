import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar.js";
import ProductCard from "../../components/ProductCard/ProductCard.js";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div className="about-page">
        <p>
          algo sobre a pagina algo sobre a pagina algo sobre a pagina algo sobre
          a pagina algo sobre a pagina algo sobre a pagina algo sobre a pagina
          algo sobre a pagina algo sobre a pagina algo sobre a pagina algo sobre
          a pagina algo sobre a pagina algo sobre a pagina algo sobre a pagina
          algo sobre a pagina
        </p>
      </div>
      <div className="first-products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      
      <div className="second-foot">
        <h1>Tem algum equipamento parado?</h1>
        <h3>Alguém pode estar procurando por ele.</h3>
      </div>
    </div>
  );
};

export default Home;
