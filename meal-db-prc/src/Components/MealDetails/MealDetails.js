import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MealDetails = () => {
const [mealDetails, setMealDetails] = useState([])
  const { idMeal } = useParams();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data.meals));
  }, []);

  return (
    <div>
      <Container>
         <Row>
             {
             mealDetails.map(mealDetail => )
             }
         </Row>
      </Container>
    </div>
  );
};

export default MealDetails;
