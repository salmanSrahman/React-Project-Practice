import React from "react";
import "./Product.css";
import { Row, Col } from "react-bootstrap";
import "./Product.css";
import Rating from "react-rating";

const Product = ({ addToCart, product }) => {
  const { name, price, img, stock, star, starCount, seller, features } =
    product;
  return (
    <div className="product__details">
      <Row className="g-3">
        <Col xl={3}>
          <img src={img} className="img-fluid" alt="" />
        </Col>
        <Col xl={9}>
          <h6>{name}</h6>
          <div className="d-flex py-2">
            <div>
              <h6>By: {seller}</h6>
              <h6>Price: ${price}</h6>
              <h6>
                only <span className="text-danger fw-bold">{stock}</span> left
                in stock -
                <span className="font__color fw-bold"> Order Soon</span>
              </h6>
              <div>
                <Rating
                  initialRating={star}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                  className="ratings pb-3"
                />
                <span className="text-secondary fw-bold">({starCount} )</span>
              </div>
              <button
                className="btn__regular"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
            <div className="ps-4">
              <h5>Features:</h5>
              {features.length !== 0 ? (
                features.map((feature) => (
                  <li>
                    {feature.description}:{feature.value}
                  </li>
                ))
              ) : (
                <li>No Feature Information Is Available.</li>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
