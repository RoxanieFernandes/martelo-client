import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import CreateProduct from "./pages/CreateProduct/CreateProduct.js";
import MyAccount from "./pages/MyAccount/MyAccount.js";
import SearchProduct from "./pages/SearchProduct/SearchProduct.js";
import Reserve from "./pages/Reserve/Reserve.js";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar-produto" element={<SearchProduct />} />
        <Route path="/cadastrar-produto" element={<CreateProduct />} />
        <Route path="/minha-conta" element={<MyAccount />} />
        <Route path="/reservar" element={<Reserve />} />
        <Route path="/editar" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
