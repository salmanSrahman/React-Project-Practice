import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import { addToDb, deleteShoppingCart } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Style from "./Shop.module.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  // use products & use cart hooks used

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  // add to cart
  const addToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.key);
  };

  // clear shopping cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const searchValue = e.target.value;
    const searchText = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayProducts(searchText);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <div className={Style.search__field}>
          <input type="text" onChange={handleSearch} />
        </div>
        <Row className="g-3">
          <Col xl={9}>
            <div className={Style.product__container}>
              {displayProducts.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  addToCart={addToCart}
                ></Product>
              ))}
            </div>
          </Col>
          <Col xl={3}>
            <Cart cart={cart} clearCart={clearCart}>
              <Button
                variant="success"
                className="w-100 mb-2"
                onClick={() => navigate("/order")}
              >
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
