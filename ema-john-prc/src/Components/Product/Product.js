import React from "react";
import { Col } from "react-bootstrap";
import style from "./Product.module.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className={`${style.product__container}`}>
      <Col></Col>
    </div>
  );
};

export default Product;
