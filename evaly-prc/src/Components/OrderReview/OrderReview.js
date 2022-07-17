import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { removeFromDb } from "../../utilities/fakeDb";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const removeItem = (key) => {
    const rest = cart.filter((product) => product.key !== key);
    setCart(rest);
    removeFromDb(key);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>
            <div className="orderDetails__container">
              {cart.map((product) => (
                <div className="order__details">
                  <Row className="g-3">
                    <Col xl={3}>
                      <img src={product?.img} className="img-fluid" alt="" />
                    </Col>
                    <Col
                      xl={9}
                      className="d-flex justify-content-between align-items-center"
                    >
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
                        <RiDeleteBin5Line
                          className="delete_btn"
                          onClick={() => removeItem(product.key)}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
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

export default OrderReview;
