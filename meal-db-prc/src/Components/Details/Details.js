import React from "react";
import { Button } from "react-bootstrap";
import Style from "./Details.module.css";
import { useNavigate } from "react-router-dom";

const Details = ({ mealDetail }) => {
  const { strMeal, strMealThumb, strInstructions, strArea, strCategory } =
    mealDetail;

  const navigate = useNavigate();

  return (
    <div className="py-3">
      <div className={`${Style.Details__container} mb-3`}>
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
      <div className="d-flex justify-content-center">
        <Button onClick={() => navigate("/meals")}>See All Meals</Button>
      </div>
    </div>
  );
};

export default Details;
