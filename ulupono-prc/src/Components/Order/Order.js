import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import Style from "./Order.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakeDb";
import { useNavigate } from "react-router-dom";
import { notify } from "../toastify/toastify";

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveFromCart = (product) => {
    const rest = cart.filter((prd) => prd.key !== product.key);
    setCart(rest);
    removeFromDb(product.key);
  };

  const navigate = useNavigate();
  const proceedCheckOut = () => {
    if (cart.length === 0) {
      notify()
     
    } else {
      navigate("/inventory");
    }
  };

  // clear shopping cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

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
                          <div onClick={() => handleRemoveFromCart(product)}>
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
            <Cart cart={cart} clearCart={clearCart}>
              <Button
                variant="success"
                className="w-100 mb-2"
                onClick={() => proceedCheckOut()}
              >
                Proceed Check Out
              </Button>
            </Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
