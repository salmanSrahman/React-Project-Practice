import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart] = useCart(products);

  return (
    <div>
      <Container>
        <Row>
          <Col xl={9}>
            <div>
              <Row>
                <Col xl={8}>
                  {cart.map((product) => (
                    <div>
                      <Row>
                        <Col xl={4}>
                          <img src={product.img} className="img-fluid" alt="" />
                        </Col>
                        <Col xl={8}>
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6>{product.name}</h6>
                              <h6>Price: ${product.price}</h6>
                              <h6>Shipping Charge: ${product.shipping}</h6>
                            </div>
                            <div>
                              <h3>Delete</h3>
                            </div>
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
