import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Style from "./Meal.module.css";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  const navigate = useNavigate();

  return (
    <Col>
      <div className={Style.Meal__container}>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2">{strMeal}</h4>
        <Button
          className="d-block w-100"
          onClick={() => navigate(`/meal/${idMeal}`)}
        >
          See Details
        </Button>
      </div>
    </Col>
  );
};

export default Meal;
