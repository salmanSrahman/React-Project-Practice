import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";

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
            <div>
              {products.map((product) => (
                <Product key={product.key} product={product}></Product>
              ))}
            </div>
          </Col>
          <Col xl={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
