import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addToDb, getsavedCart } from "../../utilities/fakeDb";
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

  useEffect(() => {
    const savedCart = getsavedCart();
    console.log(savedCart);
    let storedCart = [];
    for (const key in savedCart) {
      const addedProduct = products.find((product) => product.key === key);
      storedCart.push(addedProduct);
    }
    setCart(storedCart);
  }, [products]);

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
