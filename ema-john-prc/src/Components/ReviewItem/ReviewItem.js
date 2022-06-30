import React from "react";

const ReviewItem = ({ product }) => {
  console.log(product);
  const { img, price, name, shipping } = product;
  return (
    <div>
      <div>
        <img src={img} className="img-fluid" alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
        <h4>${shipping}</h4>
      </div>
      <div>
        <h4>Delete</h4>
      </div>
    </div>
  );
};

export default ReviewItem;
