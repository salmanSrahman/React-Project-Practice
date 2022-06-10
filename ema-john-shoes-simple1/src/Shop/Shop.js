import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../Components/Products/Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col md={9}>
            <Products />
          </Col>
          <Col md={3}>Cart</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
