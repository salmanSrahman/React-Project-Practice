import React from "react";
import { Button, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price, seller, stock, ratings } = product;
  console.log(product);
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
        <Rating className="product__ratings"
          initialRating={ratings}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          readonly
        />
        <Button
          className="d-block w-100 my-1"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </div>
    </Col>
  );
};

export default Product;
