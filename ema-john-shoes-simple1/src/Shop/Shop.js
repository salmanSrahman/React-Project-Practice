import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Components/Cart/Cart";
import Product from "../Components/Product/Product";
import { addToDb, getStoredCart } from "../utilities/fakedb";
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
    addToDb(product.id);
  };

  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

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
