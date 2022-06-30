import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 12)));
  }, []);
  return (
    <div>
      <Container>
        <Row md={3} className="g-3">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
