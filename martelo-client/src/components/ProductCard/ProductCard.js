import React from "react";
import "../ProductCard/ProductCard.css";
import image from "../../img/image.jpeg";
// apagar image do import
import { Link } from "react-router-dom";


// adicionar image nas props
const ProductCard = ({ productName, price, description }) => {
  // console.log("sou o card",price);
    return (
    <div className="productCard">
      <div className="image">
        <img className="productImg" src={image} alt="product"></img>
      </div>

      <div className="Name">
        <p>{productName}</p>
      </div>

      <div className="productPrice">
        <p>{price}</p>
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
