import React from "react";
import { Link } from "react-router-dom";

const ProductUserCard = (props) => {
  const { deleteOneProduct, id, productName, image, price, description } =
    props;
    console.log(productName);
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

      <div className="uploadBtn">
        <Link to={"/editar"} state={{ id, productName, image, price, description}}>
          <button className="editProduct">EDITAR</button>
        </Link>

        <button onClick={deleteOneProduct(id)} className="deleteProduct">
          DELETAR
        </button>
      </div>
    </div>
  );
};

export default ProductUserCard;
