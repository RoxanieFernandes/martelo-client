import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import BuscarProduto from "./pages/BuscarProdutos/BuscarProduto.js";
import CadastrarProduto from "./pages/CadastrarProduto/CadastrarProduto.js";
import MinhaConta from "./pages/MinhaConta/MinhaConta.js";
import Reservar from "./pages/Reservar/Reservar.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buscar-produto" element={<BuscarProduto />} />
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="/reservar" element={<Reservar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
