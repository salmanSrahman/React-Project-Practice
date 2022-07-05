import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import logo from "../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`${Style.Nav__container} ms-auto my-2 my-lg-0`}
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/meals">Meals</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
