import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import { addToDb } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Style from "./Shop.module.css";

const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  // use products & use cart hooks used

  // add to cart
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
