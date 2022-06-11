import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let subPrice = 0;
  for (const price in cart) {
    subPrice = price + subPrice;
    console.log(subPrice);
  }

  return (
    <div className="cart-container p-5">
      <h3>Order Summary:</h3>
      <h4>Selected Items: {cart.length}</h4>
    </div>
  );
};

export default Cart;
