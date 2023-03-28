import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "./components/Cart/CartContext";
import App from "./App";

import { AuthContextProvider } from "./components/store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
  <CartContext>
    <App />
  </CartContext>
  </AuthContextProvider>
</BrowserRouter>
);
reportWebVitals();
