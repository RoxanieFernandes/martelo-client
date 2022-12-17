import React, { useState, useLayoutEffect } from "react";
import "../SearchProduct/SearchProduct.css";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate.js";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import api from "../../service/api.service.js";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [find, setfind] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useLayoutEffect(() => {
    const getAllProducts = async () => {
      try {
        const products = await api.getProducts();
        setProducts(products);
        setFilteredProducts(products);
      } catch (error) {
        throw error;
      }
    };
    getAllProducts();
  }, [products]);

  useLayoutEffect(() => {
    if (find !== "") {
      const filteredData = products.filter((product) => {
        return product?.productName?.toUpperCase().includes(find.toUpperCase());
      });

      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  }, [find, products]);

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

      <div className="searchProductTitle">
        <h2>Buscar Produto </h2>
        <input
          placeholder="Buscar Produto..."
          type="text"
          value={find}
          onChange={(e) => {
            setfind(e.target.value);
          }}
        />
      </div>

      <div id="productsMap">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.productName}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchProduct;
