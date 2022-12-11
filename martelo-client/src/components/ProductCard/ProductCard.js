import React from "react";
import "../ProductCard/ProductCard.css";
// import parafusadeiraSemFio from "../../img/parafusadeiraSemFio.jpeg";
import { Link } from "react-router-dom";



const ProductCard = ({ productName, image, price, description }) => {
  return (
    <div className="productCard">
      <div className="image">
        <img className="productImg" src={image} alt="product"></img>
      </div>

      <div className="productName">
        <p>{productName}</p>
      </div>

      <div className="productPrice">
        <p>{price}</p>
      </div>

      <div className="productDescription">
        <p>{description}</p>
      </div>
      <Link to="/reservar">
        <button>ALUGAR</button>
      </Link>
    </div>
  );
};

export default ProductCard;
