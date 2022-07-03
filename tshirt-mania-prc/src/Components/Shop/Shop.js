import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Shop.css";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [tShirts, setTShirts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTShirts(data));
  });
  const addToCart = (selectedTshirt) => {
    const newCart = [...cart, selectedTshirt];
    setCart(newCart);
  };

  return (
    <div>
      <Container>
        <Row className="g-5 py-5">
          <Col xl={8} xs={8}>
            <Row xl={3} xs={1} sm={2} className="g-3">
              {tShirts.map((tShirt) => (
                <TShirt
                  key={tShirt._id}
                  tShirt={tShirt}
                  addToCart={addToCart}
                ></TShirt>
              ))}
            </Row>
          </Col>
          <Col xl={4} xs={4}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
