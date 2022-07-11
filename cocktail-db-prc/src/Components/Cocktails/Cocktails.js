import React from "react";
import "./Cocktails.css";
import { Col, Button } from "react-bootstrap";

const Cocktails = ({ cocktail, seeDetails, addToCart }) => {
  const { strGlass, strDrinkThumb } = cocktail;
  return (
    <Col>
      <div className="drink__container">
        <img src={strDrinkThumb} className="img-fluid" alt="" />
        <h5 className="py-1">{strGlass}</h5>
        <Button className="d-block w-100" onClick={() => seeDetails(cocktail)}>
          See Details
        </Button>
        <Button
          className="d-block w-100 my-2"
          onClick={() => addToCart(cocktail)}
        >
          Add To Cart
        </Button>
      </div>
    </Col>
  );
};

export default Cocktails;
