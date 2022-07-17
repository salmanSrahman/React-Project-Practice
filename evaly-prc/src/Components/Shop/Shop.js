import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { addToDb, clearTheCart, getStoredCart } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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

  const clearCart = () => {
    setCart([]);
    clearTheCart();
  };

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        {products.length ? (
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
              <Cart cart={cart} clearCart={clearCart}>
                <Button
                  variant="secondary"
                  className="d-block w-100 d-flex justify-content-between my-2"
                  onClick={() => navigate("/orderReview")}
                >
                  <span className="fw-bold">Review Order</span>
                  <span>
                    <AiOutlineArrowRight className="fs-4" />
                  </span>
                </Button>
              </Cart>
            </Col>
          </Row>
        ) : (
          <Button variant="danger" disabled className="d-block mx-auto my-5">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Shop;
