import React from "react";
import { Link } from "react-router-dom";

const ProductUserCard = ({ productName, image, price, description }) => {
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

        <Link to="/editar">
          <button className="editProduct">EDITAR</button>
        </Link>

        <button className="deleteProduct">DELETAR</button>

      </div>
    </div>
  );
};

export default ProductUserCard;
