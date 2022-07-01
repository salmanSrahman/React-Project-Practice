import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, stock } = product;
  return (
    <Col>
      <div className="Product__details">
        <img src={img} className="img-fluid my-2" alt="" />
        <h5>{name.slice(0, 25)}</h5>
        <h5>By:{seller}</h5>
        <h5>Price: {price}</h5>
        <h5>
          Only <span className="text-danger fw-bold">{stock}</span> left in
          stock - order soon
        </h5>
        <Button className="d-block w-100 my-1">Add To Cart</Button>
      </div>
    </Col>
  );
};

export default Product;
