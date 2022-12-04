import React from "react";
import "../ProductCard/ProductCard.css";
import parafusadeiraSemFio from "../../img/parafusadeiraSemFio.jpeg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  // trocar nome da parafusadeira para nome do produto postado
  const productName = "PARAFUSADEIRA";
  return (
    <div className="product-card">
      {/* trocar imagem para banco de dados */}
      <img className="logo" src={parafusadeiraSemFio} alt="martelo-logo"></img>
      <p>{productName}</p>

      {/* trocar para quando usuario estiver autenticado, direcionar para /reservar */}
      <div className="rent-btn">
        <Link to="/login">
          <button>ALUGAR</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
