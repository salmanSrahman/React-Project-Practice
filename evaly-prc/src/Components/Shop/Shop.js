import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { addToDb, getStoredCart } from "../../utilities/fakeDb";
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

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      let storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const addToCart = (selectedProduct) => {
    const exist = cart.find((product) => product.key === selectedProduct.key);
    let newCart = [];
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product.key !== selectedProduct.key
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
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
