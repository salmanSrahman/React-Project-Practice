import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Container, Row, Col } from "react-bootstrap";
import Cocktails from "../Cocktails/Cocktails";

const Shop = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>
            <Row xl={3} className="g-3 py-5">
              {cocktails.map((cocktail) => (
                <Cocktails
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                ></Cocktails>
              ))}
            </Row>
          </Col>
          <Col xl={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
