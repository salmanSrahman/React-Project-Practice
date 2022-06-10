import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, seller, price, stock } = product;
  return (
    <div>
      <Row className="g-3 pt-4">
        <Col md={5}>
          <img src={img} alt="" className="img-fluid" />
        </Col>
        <Col md={7} className="d-flex align-items-center">
          <div>
            <h5 className="text-primary">{name}</h5>
            <h5>By: {seller}</h5>
            <h5>Price: {price}</h5>
            <h5>
              only <span className="text-danger">{stock}</span> left in stock -
              order soon
            </h5>
            <Button variant="primary" className="d-block">
              Add To Cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
