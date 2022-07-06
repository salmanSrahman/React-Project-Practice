import React from "react";
import { Button } from "react-bootstrap";
import Style from "./Details.module.css";

const Details = ({ mealDetail }) => {
  console.log(mealDetail);
  const { strMeal, strMealThumb, strInstructions, strArea, strCategory } =
    mealDetail;
  return (
    <div className={`${Style.Details__container} my-5`}>
      <div>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="py-2">{strMeal}</h4>
        <p>{strInstructions}</p>
        <Button variant="dark" size="sm" disabled>
          {strArea}
        </Button>
        <Button variant="dark" size="sm" disabled className="ms-2">
          {strCategory}
        </Button>
      </div>
      
    </div>
  );
};

export default Details;
