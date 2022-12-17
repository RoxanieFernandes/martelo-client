import React, { useState, useLayoutEffect } from "react";
import "../MyAccount/MyAccount.css";
import { Link } from "react-router-dom";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate";
import api from "../../service/api.service.js";
import ProductUserCard from "../../components/ProductCard/ProductUserCard";

const MyAccount = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const deleteOneProduct = (_id) => async () => {
    try {
      await api.deleteProduct(_id);
      await getAllUserProducts();
    } catch (error) {
      throw error.response.data.msg;
    }
  };

  const getAllUserProducts = async () => {
    try {
      const products = await api.getUserProducts();
      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      throw error;
    }
  };
  useLayoutEffect(() => {
    getAllUserProducts();
  }, [products]);

  return (
    <div>
      <div>
        <NavbarPrivate />
      </div>

      <div className="routes-in-page">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">HOME /</li>
          </Link>
          <Link to="/minha-conta" style={{ textDecoration: "none" }}>
            <li className="home"> MINHA CONTA</li>
          </Link>
        </ul>
      </div>

      <div id="productsMap">
        {filteredProducts.map((product) => (
          <ProductUserCard
            key={product._id}
            productName={product.productName}
            image={product.image}
            price={product.price}
            description={product.description}
            deleteOneProduct={deleteOneProduct}
            id={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
