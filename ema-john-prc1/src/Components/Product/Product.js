import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, stock, ratings } = product;
  return (
    <Row>
      <Col>
        <img src={img} alt="" />
      </Col>
      <Col>
           
      </Col>
    </Row>
  );
};

export default Product;
