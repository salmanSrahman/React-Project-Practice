import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div>
      <Container>
        <Row xl={5} className="g-3 py-5">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Meals;
