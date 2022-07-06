import React from "react";
import { Row, Col } from "react-bootstrap";
import Style from "./Product.module.css";
import { BsCartPlusFill } from "react-icons/bs";
import Rating from "react-rating";

const Product = ({ product, addToCart }) => {
  const { name, price, img, seller, star, starCount, stock, features } =
    product;

  return (
    <Row className={`${Style.product__details} g-3`}>
      <Col xl={3}>
        <img src={img} className="img-fluid" alt="" />
      </Col>
      <Col xl={9}>
        <h5 style={{ color: "blue" }}>{name}</h5>
        <Row className="py-3">
          <Col xl={6}>
            <div>
              <h6>By:{seller}</h6>
              <h6>Price: {price}</h6>
              <h6>
                only {stock} left in stock -{" "}
                <span style={{ color: "goldenrod" }} className="fw-bold ">
                  Order Soon
                </span>
              </h6>
              <div>
                <Rating
                  initialRating={star}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                  className={Style.rating__part}
                />
                <span className="text-secondary"> ({starCount})</span>
              </div>
              <button
                className={`${Style.btn__regular} mt-3`}
                onClick={() => addToCart(product)}
              >
                Add To Cart <BsCartPlusFill className="fs-5" />
              </button>
            </div>
          </Col>
          <Col xl={6}>
            <div>
              <div>
                <h6>Features:</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Product;
