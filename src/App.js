import { useContext, useState } from "react";
import Header from "./components/Header";
import CartList from "./components/Cart/CartList";
import Home from "./components/pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/pages/Login";
import AuthContext from "./components/store/AuthContext";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/pages/SignUp";
import Store from "./components/pages/Store";
import ProductDetails from "./components/pages/ProductDetails";
import About from './components/pages/About';
const App = () => {
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header handleShow={handleShow} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        {<Route path="/product/:id" element={<ProductDetails />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={showCart && <CartList />}></Route>
      </Routes>
      <div style={{ textAlign: "buttom" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
