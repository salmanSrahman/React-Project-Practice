import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import style from "./Shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className={`${style.shop__container}`}>
      <Container>
        <Row>
          <Col>
             <Row>
               {
                 products.map(product => <Product product={product}></Product>)
               }
             </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
