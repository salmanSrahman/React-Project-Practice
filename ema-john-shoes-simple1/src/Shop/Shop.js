import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Components/Cart/Cart";
import Product from "../Components/Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col md={9}>
            <Row md={3} className="g-3">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                ></Product>
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <Cart cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
