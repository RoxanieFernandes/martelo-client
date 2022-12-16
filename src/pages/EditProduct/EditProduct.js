import React from "react";
import { useParams, Link } from "react-router-dom";
import NavbarPrivate from "../../components/Navbar/NavbarPrivate.js";
import api from "../../service/api.service.js";
import { useEffect, useState } from "react";
import "../EditProduct/EditProduct.css"

const EditProduct = () => {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [products, setProducts] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const products = await api.getUserProducts(id);
        setProducts(products);
      } catch (error) {
        throw error;
      }
    };

    getOneProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.editProduct({ productName, image, price, description }, id);

      //   navigate(`/product/${id}`);
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
      <div className="editProduct">
        {message !== "" && <p>{message}</p>}
        <div className="productForm">
          <h4>EDITAR PRODUTO</h4>
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
              placeholder={products.productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <label>Imagem:</label>
            <input
              type="file"
              name="image"
              required
              value={products.image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />

            <label>Preço:</label>
            <input
              type="number"
              required
              value={price}
              placeholder={products.price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label>
              Descrição:
              <textarea
                value={description}
                placeholder={products.description}
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
    </div>
  );
};

export default EditProduct;
