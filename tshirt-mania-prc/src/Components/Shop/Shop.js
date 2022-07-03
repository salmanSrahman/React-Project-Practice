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
        <Row>
          <Col>
            <Row>
              {tShirts.map((tShirt) => (
                <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>
              ))}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
