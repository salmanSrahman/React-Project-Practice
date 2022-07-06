import React from "react";
import { Row, Col } from "react-bootstrap";
import Style from "./Product.module.css";

const Product = ({ product }) => {
  console.log(product);
  const { name, price, img, seller, star, starCount, stock, features } =
    product;

  return (
    <Row className="g-3">
      <Col xl={3}>
        <img src={img} className="img-fluid" alt="" />
      </Col>
      <Col xl={9}>
        <h5>{name}</h5>
        <Row>
          <Col xl={9}>
            <div>
              <h6>By:{seller}</h6>
              <h6>Price: {price}</h6>
              <h6>only {} left in stock - order soon</h6>
              <button className={Style.btn__regular}>Add To Cart</button>
            </div>
          </Col>
          <Col xl={3}>
            <h4>Features:</h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Product;
