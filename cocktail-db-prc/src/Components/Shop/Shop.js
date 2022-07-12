import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Container, Row, Col } from "react-bootstrap";
import Cocktails from "../Cocktails/Cocktails";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakeDb";

const Shop = () => {
  const [cocktails, setCocktails] = useState([]);
  const [seeDetail, setSeeDetail] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  const seeDetails = (cocktail) => {
    setSeeDetail(cocktail);
  };

  const addToCart = (selectedCocktail) => {
    const newCart = [...cart, selectedCocktail];
    setCart(newCart);
    addToDb(selectedCocktail.idDrink);
  };

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
                  seeDetails={seeDetails}
                  addToCart={addToCart}
                ></Cocktails>
              ))}
            </Row>
          </Col>
          <Col xl={3}>
            <Cart seeDetail={seeDetail}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
