import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import style from "./Shop.module.css";

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
    <div className={`${style.shop__container}`}>
      <Container>
        <Row className="g-4">
          <Col md={9}>
            <Row md={3} className="g-3 pt-5">
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
