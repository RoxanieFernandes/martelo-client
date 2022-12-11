import React, { useState, useLayoutEffect } from "react";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate.js";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import api from "../../service/api.service.js";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [find, setfind] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);



  // getProducts = async () => {
  //   try {
  //     const { data } = await this.api.get("/product");
  //     return data;
  //   } catch (error) {
  //     throw error.response.data.message;
  //   }
  // };

  useLayoutEffect(() => {
    const getAllProducts = async ({ productName, image, price, description }) => {
      try {
        await api.getProducts();
        // navigate("/reservar");

        setProducts(api);
        setFilteredProducts(api);
      } catch (error) {
        throw error;
      }
       
    };
  
    getAllProducts();
  }, [products]);

 

  useLayoutEffect(() => {
    if (find !== "") {
      const filteredData = products.filter((product) => {
        return product.includes(find.toUpperCase());
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
        {/* <h2>Buscar Projeto</h2> */}
        <input
          placeholder="Buscar Produto..."
          type="text"
          value={find}
          onChange={(e) => {
            setfind(e.target.value);
          }}
        />
      </div>

      <div className="productsMap">
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

export default SearchProduct;
