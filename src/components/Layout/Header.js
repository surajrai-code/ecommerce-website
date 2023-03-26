import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import { Route, Routes } from "react-router-dom";
import About from './About'
import Home from "./Home";
import ContactUs from './ContactUs'
import ProductList from "../Store/ProductList";
const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Home"
          >
            HOME
          </NavLink>

          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Store"
          >
            STORE
          </NavLink>

          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/About"
          >
            ABOUT
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/Contactus"
          >
            Contact us
          </NavLink>
          <CartButton onButtonpass={props.onOpenButton} />
        </Container>
      </Navbar>
     
      <Routes><Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="productlist" element={<ProductList />} />

      </Routes>
    </div>
  );
};
export default Header;
