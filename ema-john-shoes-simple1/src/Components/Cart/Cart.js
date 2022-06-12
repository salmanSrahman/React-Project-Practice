import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let subPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    console.log(product);
    subPrice = product.price + subPrice;
    shipping = product.shipping + shipping;
  }
  const tax = subPrice * 0.1;
  const grandTotal = subPrice + shipping + tax;

  return (
    <div className="cart-container py-5 ps-2">
      <h2>Order Summary:</h2>
      <h4>Selected Items: {cart.length}</h4>
      <h4>Total Price:${subPrice.toFixed(2)}</h4>
      <h4>Shipping:${shipping.toFixed(2)}</h4>
      <h4>Tax:${tax.toFixed(2)}</h4>
      <h4 className="fw-bold text-danger">
        Grand Total :${grandTotal.toFixed(2)}
      </h4>
    </div>
  );
};

export default Cart;
