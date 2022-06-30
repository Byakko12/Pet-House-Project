import React from 'react';
import ReactDOM from 'react-dom/client';
import "./components/Navbar/style.css"
import "./components/Slide/style.css"
import "./components/cards/style.css";
import "./components/News/style.css"
import './components/Footer/style.css';
import './components/Login/style.css';
import './components/Register/Register.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
