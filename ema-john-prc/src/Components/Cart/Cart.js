import React from "react";
import style from "./Cart.module.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let subPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    subPrice = subPrice + product.price;
    shipping = shipping + product.shipping;
  }
  let tax = subPrice * 0.1;
  const grandTotal = subPrice + shipping + tax;
  return (
    <div className={`${style.cart__container}`}>
      <h3>Order Summary</h3>
      <h5>Selected Items: {cart.length}</h5>
      <h5>Total Price: ${subPrice}</h5>
      <h5>Shipping: ${shipping}</h5>
      <h5>Tax: ${tax}</h5>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
