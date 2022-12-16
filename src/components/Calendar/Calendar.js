// import React, { useState } from "react";
// import "../Calendar/Calendar.css";
// import { useNavigate } from "react-router-dom";
// import api from "../../service/api.service.js";

const Calendar = (props) => {
  // const [owner, setOwner] = useState("");
  // const [renter, setRenter] = useState("");
  // const [product, setProduct] = useState("");
  // const [inicialDate, setInicialDate] = useState("");
  // const [deliveryDate, setDeliveryDate] = useState("");
  // const [price, setPrice] = useState("");
  // const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newRent = {
  //     owner,
  //     renter,
  //     product,
  //     inicialDate,
  //     deliveryDate,
  //     price,
  //   };

  //   const daysOfRent = deliveryDate.length - inicialDate.length;

  //   // const totalPrice =

  //   try {
  //     console.log(newRent);
  //     await api.rent(newRent);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      {/* <div className="calendar">
        <h4>FAÇA SUA RESERVA</h4>
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
        </form>
      </div> */}
    </div>
  );
};

export default Calendar;
