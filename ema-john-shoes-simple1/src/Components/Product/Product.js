import React from "react";
import { Col } from "react-bootstrap";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, seller, price, stock } = product;
  return (
    <Col>
      <div className="product-container pt-5">
        <img src={img} alt="" className="img-fluid" />
        <div>
          <h5 className="text-primary py-2">{name.slice(0, 25)}</h5>
          <h5>By: {seller}</h5>
          <h5>Price: {price}</h5>
          <h5>
            only <span className="text-danger">{stock}</span> left in stock -
            order soon
          </h5>
          <button
            className="d-block btn-cart w-100 py-2"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Product;
