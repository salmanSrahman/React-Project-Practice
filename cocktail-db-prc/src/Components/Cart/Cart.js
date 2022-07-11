import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";

const Cart = ({ seeDetail }) => {
  console.log(seeDetail);
  const {
    strDrink,
    strDrinkThumb,
    strInstructions,
    strCategory,
    strAlcoholic,
  } = seeDetail;
  return (
    <div>
      {strDrink ? (
        <div className="see__details">
          <img src={strDrinkThumb} className="img-fluid" alt="" />
          <h4>{strDrink}</h4>
          <p>{strInstructions}</p>
          <Button variant="secondary" size="sm" disabled>
            {strCategory}
          </Button>
          <Button variant="secondary" size="sm" disabled className="ms-1">
            {strAlcoholic}
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
