import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, stock } = product;
  return (
    <Col>
      <img src={img} className="img-fluid my-2" alt="" />
      <h4>{name}</h4>
      <h5>By:{seller}</h5>
      <h5>Price: {price}</h5>
      <h5>Only {stock} left in stock - order soon</h5>
    </Col>
  );
};

export default Product;
