
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account/Account.js";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import NewAccount from "./pages/NewAccount/NewAccount.js"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/minha-conta" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<NewAccount/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
