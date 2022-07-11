import React from "react";
import "./Cocktails.css";
import { Col, Button } from "react-bootstrap";

const Cocktails = ({ cocktail, seeDetails}) => {
  const { strGlass, strDrinkThumb } = cocktail;
  return (
    <Col>
      <div className="drink__container">
        <img src={strDrinkThumb} className="img-fluid" alt="" />
        <h5 className="py-1">{strGlass}</h5>
        <Button className="d-block w-100" onClick={()=> seeDetails(cocktail)}>See Details</Button>
      </div>
    </Col>
  );
};

export default Cocktails;
