import React from "react";
import "./ReviewItem.css";

import { RiDeleteBin5Line } from "react-icons/ri";

const ReviewItem = ({ product }) => {
  return (
    <div className="d-flex review__container my-3">
      <div>
        <img src={product?.img} alt="" />
      </div>
      <div className="d-flex justify-content-between w-100">
        <div>
          <h5 title={product?.name}>
            {product?.name.length > 20
              ? product?.name.slice(0, 20) + "..."
              : product?.name}
          </h5>
          <h5>Price: {product?.price}</h5>
          <h5>Shipping Charge: {product?.shipping}</h5>
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
