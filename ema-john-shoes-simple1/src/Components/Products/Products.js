import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Row md={3} className="g-4">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
