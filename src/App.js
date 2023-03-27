import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
import LoginContext from "./components/Store/LoginContext";
import CartContext from "./components/Store/cart-context";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import AboutUs from "./components/Pages/AboutUs";
import Home2 from "./components/Pages/Home2";
import Store from "./components/Pages/Store";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetail from "./components/Pages/ProductDetails";
import LoginForm from "./components/Pages/LoginPage";

function App() {
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }

  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    if (!email) return;
    axios
      .get(
        `https://crudcrud.com/api/3311b13bcd1f42d5bb9ad7016452517e/cart${email}`
      )
      .then((res) => {
        const data = res.data;
        for (const key in data) {
          const item = data[key];
          item._id = key;
          cartCtx.mapID(item);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [email, cartCtx]);

  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />

        <Routes
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          {/* <Route path="/" exact>
            <Navigate to="/Login" />
          </Route> */}
          {/* <Route path="/Store">
            {authCtx.isLoggedIn && <Store />}
            {!authCtx.isLoggedIn && <Navigate to="/Login" />}
          </Route> */}
          <Route path="Home" element={<Home2 />} />

          <Route path="AboutUs" element={<AboutUs />} />

          <Route path="ContactUs" element={<ContactUs />} />

          <Route path="ProductDetail" element={<ProductDetail />} />
          {/* <Route path="/Login" exact>
            <LoginForm />
            {!authCtx.isLoggedIn && <Navigate to="/Login" />}
          </Route> */}
        </Routes>

        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;
