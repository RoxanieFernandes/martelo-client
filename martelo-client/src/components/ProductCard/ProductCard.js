import React from "react";
import "../ProductCard/ProductCard.css";
import { Link } from "react-router-dom";



const ProductCard = ({ productName, image, price, description }) => {
  console.log("sou o card",productName);
    return (
    <div className="productCard">
      <div className="image">
        <img className="productImg" src={image} alt="product"></img>
      </div>

      <div className="Name">
        <h4>{productName}</h4>
      </div>

      <div className="productPrice">
        <p>R$ {price},00 / dia</p>
      </div>

      <div className="productDescription">
        <p>{description}</p>
      </div>
      <div className="rentBtn">
      <Link to="/reservar">
        <button>ALUGAR</button>
      </Link>
      </div>
      
    </div>
  );
};

export default ProductCard;
