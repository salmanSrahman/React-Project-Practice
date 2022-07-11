import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav__container"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/home">Home</Link>
              <Link to="/home">About</Link>
              <Link to="/checkout">Check Out</Link>
              <Link to="/home">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
