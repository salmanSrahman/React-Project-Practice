import React from "react";
import { Col } from "react-bootstrap";
import "./Item.css";

const Item = ({ item }) => {
  console.log(item);
  const { img, title, des, price, id } = item;
  return (
    <Col>
      <div className="menu-container">
        <h2>{title}</h2>
        <h4>Id:{id}</h4>
        <h4>Price:{price}</h4>
        <p>{des}</p>
        <img src={img} alt="" />
      </div>
    </Col>
  );
};

export default Item;
