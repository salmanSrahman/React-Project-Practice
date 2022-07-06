import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addToDb, getStoredCart } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Style from "./Shop.module.css";

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

  useEffect(() => {
    const storedCart = getStoredCart();
    let savedCart = [];
    for (const key in storedCart) {
      const addedProduct = products.find((product) => product.key === key);
      if (addedProduct) {
        const quantity = storedCart[key];
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
          <Col xl={9}>
            <div className={Style.product__container}>
              {products.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  addToCart={addToCart}
                ></Product>
              ))}
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

export default Shop;
