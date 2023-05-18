import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate.js";
import api from "../../service/api.service.js";
import { useEffect, useState } from "react";
import "../EditProduct/EditProduct.css";

const EditProduct = () => {
  const { state } = useLocation();

  const [products, setProducts] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState(state);
  const onChange = (inputKey) => (e) => {
    const { value } = e.target;
    setForm({ ...form, [inputKey]: value });
  };

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const allProducts = await api.getUserProducts();
        setProducts(allProducts);
      } catch (error) {
        throw error;
      }
    };
    getOneProduct();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.editProduct(form, state.id);
      setMessage("Produto alterado com sucesso!");
    } catch (error) {
      showMessage(error);
    }
  };

  const showMessage = (error) => {
    setError(error);
    setTimeout(() => {
      setError(error);
    }, 3000);
  };


  // products deve excluir, foi ativado só para nao dar erro
  products()

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
            <li className="home"> MINHA CONTA / </li>
          </Link>
          <Link to="/editar" style={{ textDecoration: "none" }}>
            <li className="home"> EDITAR PRODUTO </li>
          </Link>
        </ul>
      </div>
      <div className="editForm">
        {message !== "" && <p>{message}</p>}

        <div className="editProduct">
          <div className="productForm">
            <h4>EDITAR PRODUTO</h4>

            <form onSubmit={handleSubmit}>
              <label>Ferramenta: </label>
              <input
                type="text"
                value={form.productName}
                onChange={onChange("productName")}
              />

              <label>Imagem:</label>
              <input
                type="file"
                name="image"
                filename={form.image}
                onChange={onChange("image")}
              />

              <label>Preço:</label>
              <input
                type="number"
                value={form.price}
                onChange={onChange("price")}
              />

              <label>Descrição:</label>
              <textarea
                value={form.description}
                onChange={onChange("description")}
              ></textarea>

              <div className="buttons">
                <button type="submit">Salvar</button>

                <Link to="/minha-conta" style={{ textDecoration: "none" }}>
                  <li className="back"> VOLTAR </li>
                </Link>
              </div>
            </form>
            {error && <p> {error} </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
