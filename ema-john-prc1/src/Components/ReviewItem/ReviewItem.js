import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
    <div>
      <h5>{props?.product?.name}</h5>
    </div>
  );
};

export default ReviewItem;
