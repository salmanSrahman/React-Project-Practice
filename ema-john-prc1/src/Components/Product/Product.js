import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, price, id } = product;
  return (
    <Col>
      <div>
        <img src={img} alt="" className="img-fluid" />
        <h5>${price}</h5>
        <h6>Product Id: {id}</h6>
        <Button>Add To Cart</Button>
      </div>
    </Col>
  );
};

export default Product;
