import "./App.css";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Orders from "./Pages/Orders";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
