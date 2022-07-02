import React from "react";
import "./ReviewItem.css";

import { RiDeleteBin5Line } from "react-icons/ri";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  return (
    <div className="d-flex review__container my-3">
      <div>
        <img src={product?.img} alt="" />
      </div>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="px-2">
          <h6 title={product?.name}>
            {product?.name.length > 20
              ? product?.name.slice(0, 20) + "..."
              : product?.name}
          </h6>
          <h6>Price: ${product?.price}</h6>
          <h6>Shipping Charge: ${product?.shipping}</h6>
        </div>
        <div>
          <RiDeleteBin5Line
            className="delete__icon"
            onClick={() => handleRemoveFromCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
