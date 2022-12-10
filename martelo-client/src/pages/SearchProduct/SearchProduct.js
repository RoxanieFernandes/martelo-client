import React from "react";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate.js";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.js";

const SearchProduct = () => {
  return (
    <div className="searchProduct">
      <div className="navbar">
        <NavbarPrivate />
      </div>

      <div className="routes-in-page">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="home">HOME /</li>
          </Link>
          <Link to="/buscar-produto" style={{ textDecoration: "none" }}>
            <li className="home">BUSCAR PRODUTO</li>
          </Link>
        </ul>
      </div>

      <div className="search">
        <p>barra de busca</p>
      </div>

      <div className="products">
        <ProductCard />
      </div>

    </div>
  );
};

export default SearchProduct;
