import React from "react";
import { Button, Col } from "react-bootstrap";
import "./TShirt.css";

const TShirt = ({ tShirt }) => {
  console.log(tShirt);
  const { name, picture, price } = tShirt;
  return (
    <Col>
      <div className="tShirt__details">
        <img src={picture} className="img-fluid" alt="" />
        <h4>{name}</h4>
        <h4>Price: ${price}</h4>
        <Button className="d-block w-100">Add To Cart</Button>
      </div>
    </Col>
  );
};

export default TShirt;
