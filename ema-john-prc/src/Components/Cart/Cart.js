import React from "react";
import style from "./Cart.module.css";

const Cart = ({ cart }) => {
  let subPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product?.quantity;
    subPrice = subPrice + product?.price * product?.quantity;
    shipping = shipping + product?.shipping * product?.quantity;
  }
  let tax = subPrice * 0.1;
  const grandTotal = subPrice + shipping + tax;
  return (
    <div className={`${style.cart__container}`}>
      <h3>Order Summary</h3>
      <h5>Selected Items: {quantity}</h5>
      <h5>Total Price: ${subPrice.toFixed(2)}</h5>
      <h5>Shipping: ${shipping.toFixed(2)}</h5>
      <h5>Tax: ${tax.toFixed(2)}</h5>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
