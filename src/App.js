// import react from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from "./Components/Navbar"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar /> */}
    {/* <Login /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}/>
      <Route path="/login" element={<Login />}/>
       
      
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
