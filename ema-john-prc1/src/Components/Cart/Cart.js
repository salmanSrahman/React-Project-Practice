import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let subPrice = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    if (product) {
      quantity = quantity + product?.quantity;
      subPrice = subPrice + product?.price * product?.quantity;
      shipping = shipping + product?.shipping * product?.quantity;
    }
  }

  let subTotal = shipping + subPrice;
  let tax = subTotal * 0.1;
  let total = subTotal + tax;

  return (
    <div className="cart__container">
      <h2>Order Summary</h2>
      <h3>Items Ordered:{quantity}</h3>
      <h6>Items: ${subPrice.toFixed(2)}</h6>
      <h6>Shipping & Handing: ${shipping.toFixed(2)}</h6>
      <h6>Total Before Tax: ${subTotal.toFixed(2)}</h6>
      <h6>Estimated Tax: ${tax.toFixed(2)}</h6>
      <h4 className="text-danger">Total Price: {total.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
