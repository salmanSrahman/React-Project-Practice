import React from "react";
import { Col } from "react-bootstrap";
import style from "./Product.module.css";

const Product = ({ product, addToCart }) => {
  const { img, price, name, seller, stock } = product;
  return (
    <Col>
      <div className={`${style.product__container}`}>
        <img src={img} alt="" className="img-fluid" />
        <div>
          <h5 className={`${style.product__details}`}>{name}</h5>
          <div className="py-3">
            <h5>Price:${price}</h5>
            <h5>Manufacturer: {seller}</h5>
            <h5>only {stock} left in stock - order soon</h5>
          </div>
        </div>
        <button className="btn-regular" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </Col>
  );
};

export default Product;
