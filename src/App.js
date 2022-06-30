import React from 'react';
import "../src/App.css";

import Home from "../src/components/Routes/Home";
import LoginRegister from './components/Routes/LoginRegister';
import Products from './components/Routes/Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
          // <Home/>
  <Router>
    <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/home" element={<Home/>} />
       <Route  path="/sign_in" element={<LoginRegister/>} />
       <Route  path="/products" element={<Products/>} />
    </Routes>
   </Router>
  )
}
export default App;