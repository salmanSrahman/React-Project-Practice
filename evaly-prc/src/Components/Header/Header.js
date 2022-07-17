import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CustomLink from "../../Hooks/CustomLink/CustomLink";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/shop">
            <img src={logo} alt="" className="w-25 " />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav__container"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/shop">Shop</CustomLink>
              <CustomLink to="/orderReview">Order Review</CustomLink>
              <CustomLink to="/manageInventory">Manage Inventory</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
