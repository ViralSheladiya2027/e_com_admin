// import react from 'react';
import './App.css';
import Login from './Components/Login';
// import Navbar from "./Components/Navbar"
import Products from "./Components/Products";
import SideNav from "./Components/SideNav";
import Home from "./Components/Home";
import About from "./Components/About";
import Settings from "./Components/Settings"
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
      <Route path="/" element={<SideNav />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/settings" element={<Settings />}/>
      
    </Routes>
  </BrowserRouter>
     </>
     
  );
}

export default App;
