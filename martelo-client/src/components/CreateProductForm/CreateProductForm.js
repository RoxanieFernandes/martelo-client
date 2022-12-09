import React from "react";
import "../CreateProductForm/CreateProductForm.css";
// import CurrencyInput from "react-currency-input-field";

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
      console.log(newProduct);
      await api.createProduct(newProduct);
      navigate("/minha-conta");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div className="newProduct">
      <div className="productForm">
        <h4>CADASTRAR PRODUTO</h4>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Ferramenta: </label>
          <input
            type="text"
            required
            value={productName}
            placeholder="Nome da Ferramenta"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <label>Imagem:</label>
          <input
            type="file"
            required
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          {/* corrigir o imput do preço e o da imagem.
          está funcionando, mas precisa formatar */}

          <label>Preço:</label>
          <input
            type="text"
            required
            value={price}
            placeholder="valor da diaria"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          {/* <CurrencyInput
            id="input"
            name="input-price"
            placeholder="Adicione o valor da diária"
            prefix="R$ "
            defaultValue={0}
            allowDecimals={false}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          /> */}

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
