import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    price = price + product?.price * product?.quantity;
    shipping = shipping + product?.shipping;
  }
  const beforeTax = shipping + price;
  const tax = beforeTax * 0.1;
  const totalPrice = beforeTax + shipping + tax;

  return (
    <div className="cart__container">
      <h3>Order Summary</h3>
      <h5>Items Ordered: {cart.length}</h5>
      <h5>Before Tax: ${price.toFixed(2)}</h5>
      <h5>Shipping & Handling: ${shipping.toFixed(2)}</h5>
      <h5>Total Before Tax: ${beforeTax.toFixed(2)}</h5>
      <h5>Total Tax: ${tax.toFixed(2)}</h5>
      <h4 className="text-danger">Order Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
