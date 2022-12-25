// import react from 'react';
import './App.css';
import Login from './Pages/Login';
// import Navbar from "./Components/Navbar"
import Users from "./Pages/Users";
import SideNav from "./Components/SideNav";
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
      {/* <Route path="/" element={<SideNav />}/> */}
      <Route path="/login" element={<Login />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/analytics" element={<Analytics />}/>
      <Route path="/settings" element={<Settings />}/>
      
    </Routes>
  </BrowserRouter>
     </>
     
  );
}

export default App;
