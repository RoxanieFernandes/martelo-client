import React, { useState } from "react";
import "../Calendar/Calendar.css";
import { useNavigate } from "react-router-dom";
import api from "../../service/api.service.js";

const Calendar = (props) => {
  const [owner, setOwner] = useState("");
  const [renter, setRenter] = useState("");
  const [product, setProduct] = useState("");
  const [inicialDate, setInicialDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRent = {
      owner: owner.id,
      renter: renter.id,
      product,
      inicialDate,
      deliveryDate,
      price,
    };

    try {
      console.log(newRent);
      await api.rent(newRent);
      setMessage("Para combinar a retirada e pagamento, entre em contato com ", owner);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>
      <div className="message"> 
      {message !== "" && <p>{message}</p>}
      <div className="calendar">
        <h4>FAÇA SUA RESERVA</h4>
        <p>Selecione a data que deseja reservar a ferramenta 
          e entre em contato com o locador.</p>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>Retirada</label>
          <input
            type="date"
            required
            value={inicialDate}
            onChange={(e) => {
              setInicialDate(e.target.value);
            }}
          />

          <label>Entrega</label>
          <input
            type="date"
            required
            value={deliveryDate}
            onChange={(e) => {
              setDeliveryDate(e.target.value);
            }}
          />
          <div>
          <button className="button" type="submit">Reservar</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Calendar;
