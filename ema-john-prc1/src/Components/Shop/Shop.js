import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col md={9}>
            <Row md={3}>
              {products.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
