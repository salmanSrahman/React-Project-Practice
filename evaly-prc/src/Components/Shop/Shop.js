import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addToDb } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.key);
  };
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col xl={9}>
            {products.map((product) => (
              <Product
                key={product.key}
                addToCart={addToCart}
                product={product}
              ></Product>
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

export default Shop;
