import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="Header__container">
        <Container>
          <Navbar.Brand as={NavLink} to="/shop">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 Nav__container"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/order">Order Review</CustomLink>
              <CustomLink to="/inventory">Order Inventory</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
