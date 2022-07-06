import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import Style from "./Order.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromDb } from "../../utilities/fakeDb";

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveFromCart = (product) => {
    const rest = cart.filter((prd) => prd.key !== product.key);
    setCart(rest);
    removeFromDb(product.key);
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
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
