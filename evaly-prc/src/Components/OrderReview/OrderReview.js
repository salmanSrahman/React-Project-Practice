import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart] = useCart(products);
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderReview;
