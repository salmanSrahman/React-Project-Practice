import React from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { clearTheCart, removeFromDb } from "../../utilities/fakeDb";
import { useNavigate } from "react-router-dom";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const removeItem = (key) => {
    const rest = cart.filter((product) => product.key !== key);
    setCart(rest);
    removeFromDb(key);
  };
  const clearCart = () => {
    setCart([]);
    clearTheCart();
  };

  return (
    <div>
      <Container>
        {products.length ? (
          <Row>
            <Col xl={9}>
              {cart.length ? (
                <div className="orderDetails__container">
                  {cart.map((product) => (
                    <div className="order__details">
                      <Row className="g-3">
                        <Col xl={3}>
                          <img
                            src={product?.img}
                            className="img-fluid"
                            alt=""
                          />
                        </Col>
                        <Col
                          xl={9}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div>
                            <h6>{product?.name}</h6>
                            <h6>
                              Price:{" "}
                              <span className="font__color">
                                ${product?.price}
                              </span>
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
              ) : (
                <h5 className="text-danger text-center mt-5 pt-5">
                  No product added in your cart. Please add some product.
                </h5>
              )}
            </Col>
            <Col xl={3}>
              <Cart cart={cart} clearCart={clearCart}>
                <Button
                  variant="warning"
                  className="d-block w-100 d-flex justify-content-between my-2"
                  onClick={() => navigate("/manageInventory")}
                >
                  <span className="fw-bold">Proceed Checkout</span>
                  <span>
                    <AiOutlineShoppingCart className="fs-4" />
                  </span>
                </Button>
              </Cart>
            </Col>
          </Row>
        ) : (
          <Spinner
            animation="grow"
            variant="danger"
            className="d-block mx-auto my-5"
          />
        )}
      </Container>
    </div>
  );
};

export default OrderReview;
