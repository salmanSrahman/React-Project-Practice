import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Shop.css";
import TShirt from "../TShirt/TShirt";

const Shop = () => {
  const [tShirts, setTShirts] = useState([]);
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTShirts(data));
  });
  return (
    <div>
      <Container>
        <Row className="g-2">
          <Col xl={9} xs={9}>
            <Row xl={3} xs={1} sm={2} className="g-3 py-3">
              {tShirts.map((tShirt) => (
                <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>
              ))}
            </Row>
          </Col>
          <Col xl={3} xs={3}>
            <h1>Cart</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
