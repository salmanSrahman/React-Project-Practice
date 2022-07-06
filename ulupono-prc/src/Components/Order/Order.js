import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import Style from "./Order.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const Order = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);

  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>
            <div>
              <Row className="g-3">
                <Col xl={8}>
                  {cart.map((product) => (
                    <div className={`${Style.orderProduct__container}`}>
                      <Row className="g-3">
                        <Col xl={3}>
                          <img src={product.img} className="img-fluid" alt="" />
                        </Col>
                        <Col
                          xl={9}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <div>
                              <h6>{product.name}</h6>
                              <h6>Price: ${product.price}</h6>
                              <h6>Shipping Charge: ${product.shipping}</h6>
                            </div>
                          </div>
                          <div>
                            <RiDeleteBin6Line className={Style.delete__btn} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={3}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
