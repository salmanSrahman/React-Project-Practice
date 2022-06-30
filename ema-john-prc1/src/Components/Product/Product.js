import React from "react";
import { Button, Col } from "react-bootstrap";
import addToDb from "../../Utilities/fakeDb";
import "./Product.css";

const Product = ({ product }) => {
  const { img, price, id } = product;

  const addToCart = (id) => {
    addToDb(id);
  };

  return (
    <Col>
      <div>
        <img src={img} alt="" className="img-fluid" />
        <h5>${price}</h5>
        <h6>Product Id: {id}</h6>
        <Button className="d-block w-100" onClick={() => addToCart(id)}>
          Add To Cart
        </Button>
      </div>
    </Col>
  );
};

export default Product;
