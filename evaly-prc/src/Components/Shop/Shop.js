import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <Col xl={9}>
            {products.map((product) => (
              <Product key={product.key} product={product}></Product>
            ))}
          </Col>
          <Col xl={3}>
            <h3>Cart</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
