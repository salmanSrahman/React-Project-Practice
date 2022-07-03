import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredCart } from "../../Utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useState([]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [exist, ...rest];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
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

  const clearCart = () => {
    console.log("Hello");
    setCart([]);
  };

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
            <Cart cart={cart} clearCart={clearCart}>
              <Button className="d-block w-100 my-2" variant="success">
                Review Order
              </Button>
            </Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
