import React from "react";
import Style from "./Header.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/shop">
            <img src={logo} className="w-50" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`${Style.nav__container} ms-auto my-2 my-lg-0`}
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
