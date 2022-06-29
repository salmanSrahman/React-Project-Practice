import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="header-nav">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/order">Order Review</CustomLink>
              <CustomLink to="/inventory">Manage Inventory</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
