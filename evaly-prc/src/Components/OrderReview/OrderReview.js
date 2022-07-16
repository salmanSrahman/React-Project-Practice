import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {cart.map((product) => (
              <div>
                <Row>
                  <Col xl={6}>
                    <img src={product?.img} className="img-fluid" alt="" />
                  </Col>
                  <Col xl={6}>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
          <Col>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderReview;
