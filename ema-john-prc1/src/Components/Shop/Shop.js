import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addToDb } from "../../Utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col md={9}>
            <div className="py-4">
              <Row md={3} className="g-3">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  ></Product>
                ))}
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <Cart cart={cart}></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
