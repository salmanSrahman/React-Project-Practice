import React from "react";
import style from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={`${style.cart__container}`}>
      <h3>Order Summary</h3>
      <h5>Selected Items: {cart.length}</h5>
    </div>
  );
};

export default Cart;
