import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import "./Order.css";

const Order = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);

  return (
    <div>
      <Container>
        <Row>
          <Col md={9}></Col>
          <Col md={3}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
