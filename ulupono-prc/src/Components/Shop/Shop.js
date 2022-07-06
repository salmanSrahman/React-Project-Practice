import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";
import Style from './Shop.module.css'

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
            <div className={Style.product__container}>
              {products.map((product) => (
                <Product key={product.key} product={product}></Product>
              ))}
            </div>
          </Col>
          <Col xl={3}>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
