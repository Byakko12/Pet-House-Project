import React from 'react';
import "../src/App.css";

import Home from "../src/components/Routes/Home";
import LoginRegister from './components/Routes/LoginRegister';
import Products from './components/Routes/Products';
import Cart from './components/Routes/ShoppingCart';
import Error404 from './components/404/Error404'

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
       <Route  path="cart_shopping" element={<Cart/>}/>
       <Route  path="/*" element={<Error404/>}/>
    </Routes>
   </Router>
  )
}
export default App;