import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useCart from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../Utilities/fakeDb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = ({ props }) => {
  const navigate = useNavigate();
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(props);

  const handleRemoveFromCart = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  const clearCart = () => {
    console.log("Hello");
    setCart([]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
            <div className="d-flex justify-content-center">
              <div>
                {cart.map((product) => (
                  <ReviewItem
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                  ></ReviewItem>
                ))}
              </div>
            </div>
          </Col>
          <Col md={3}>
            <Cart cart={cart} clearCart={clearCart}>
              <Button
                className="d-block w-100 my-2"
                variant="success"
                onClick={() => navigate("/inventory")}
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
