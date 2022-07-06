import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";

const MealDetails = () => {
  const [mealDetails, setMealDetails] = useState([]);
  const { idMeal } = useParams();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals));
  }, [idMeal]);

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="d-block m-auto">
            {mealDetails.map((mealDetail) => (
              <Details
                key={mealDetail.idMeal}
                mealDetail={mealDetail}
              ></Details>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MealDetails;
