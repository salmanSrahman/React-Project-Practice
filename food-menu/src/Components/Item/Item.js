import React from "react";
import { Button, Col } from "react-bootstrap";
import "./Item.css";

const Item = ({ item }) => {
  const { title, des, price, id } = item;
  return (
    <Col>
      <div className="menu-container">
        <h2>{title}</h2>
        <h4>Id:{id}</h4>
        <h4>Price:{price}</h4>
        <p>{des}</p>
        <Button>Add To Cart</Button>
      </div>
    </Col>
  );
};

export default Item;
