// import react from 'react';
import './App.css';
import Login from './Pages/Login';
// import Navbar from "./Components/Navbar"
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Orders from "./Pages/Orders";
// import SideNav from "./Components/SideNav";
import Home from "./Pages/Home";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/customers" element={<Customers />}/>
      <Route path="/analytics" element={<Analytics />}/>
      <Route path="/settings" element={<Settings />}/>
      
    </Routes>
  </BrowserRouter>
     </>
     
  );
}

export default App;
