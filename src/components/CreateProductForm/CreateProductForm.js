import React from "react";
import "../CreateProductForm/CreateProductForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api.service.js";

const CreateProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      image,
      price,
      description,
    };

    try {
      await api.createProduct(newProduct);
      navigate("/minha-conta");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="newProduct">
      <div className="productForm">
        <h4>CADASTRAR PRODUTO</h4>
        <form
          action="/product"
          method="post"
          enctype="multipart/form-data"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Ferramenta: </label>
          <input
            type="text"
            required
            value={productName}
            placeholder="Nome da ferramenta"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <label>Imagem:</label>
          <input
            type="file"
            name="image"
            required
            filename={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <label>Preço:</label>
          <input
            type="number"
            required
            value={price}
            placeholder="Valor da diária"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label>
            Descrição:
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </label>
          <button type="submit">Cadastrar</button>
        </form>
        {error && <p> {error} </p>}
      </div>
    </div>
  );
};

export default CreateProductForm;
