import React, { useState, useLayoutEffect } from "react";
import "../MyAccount/MyAccount.css";
import { Link } from "react-router-dom";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate";
import api from "../../service/api.service.js";
import ProductCard from "../../components/ProductCard/ProductCard.js";

const MyAccount = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useLayoutEffect(() => {
    const getAllUserProducts = async () => {
      try {
        const products = await api.getUserProducts();
        setProducts(products);
        setFilteredProducts(products);
      } catch (error) {
        throw error;
      }
    };
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
          <ProductCard
            key={product._id}
            product={product.productName}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
