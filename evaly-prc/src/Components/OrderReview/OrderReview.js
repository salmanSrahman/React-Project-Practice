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
          <Col xl={9}>
            {cart.map((product) => (
              <div>
                <Row>
                  <Col xl={3}>
                    <img src={product?.img} className="img-fluid" alt="" />
                  </Col>
                  <Col xl={6}>
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>{product?.name}</h6>
                        <h6>
                          Price:{" "}
                          <span className="font__color">${product?.price}</span>
                        </h6>
                        <h6>
                          Shipping Charge:{" "}
                          <span className="font__color">
                            ${product?.shipping}
                          </span>
                        </h6>
                      </div>
                      <div>
                        <button>Delete</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
          <Col xl={3}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderReview;
