import React from "react";
import "./ReviewItem.css";

import { RiDeleteBin5Line } from "react-icons/ri";

const ReviewItem = ({ product }) => {
  return (
    <div className=" review__container">
      <div className="d-flex justify-content-between">
        <div>
          <img src={product?.img} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <h5>{product?.name.slice(0, 25)}</h5>
            <h5>Price: {product?.price}</h5>
            <h5>Shipping Charge: {product?.shipping}</h5>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div>
            <RiDeleteBin5Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
