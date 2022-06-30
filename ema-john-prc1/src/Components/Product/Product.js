import React from "react";
import { Button, Col } from "react-bootstrap";
import { addToDb, removeFromDb } from "../../Utilities/fakeDb";

import "./Product.css";

const Product = ({ product }) => {
  const { img, price, id } = product;

  const addToCart = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
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
        <Button
          className="d-block w-100 my-2"
          variant="danger"
          onClick={() => removeFromCart(id)}
        >
          Remove From Cart
        </Button>
      </div>
    </Col>
  );
};

export default Product;
