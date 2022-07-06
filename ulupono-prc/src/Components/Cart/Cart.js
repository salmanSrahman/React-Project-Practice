import React from "react";
import Style from "./Cart.module.css";

const Cart = ({ cart }) => {
  let subTotal = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    console.log(product);
    if (!product.quantity) {
      product.quantity = 1;
    }
    quantity = quantity + product.quantity;
    subTotal = subTotal + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const totalBeforeTax = shipping + subTotal;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;

  return (
    <div className={`${Style.cart__container} p-3`}>
      <h4>Order Summary</h4>
      <h5>Items Ordered:{quantity}</h5>
      <h5>Items: ${subTotal.toFixed(2)}</h5>
      <h5>Shipping & Handling: ${shipping.toFixed(2)}</h5>
      <h5>Total Before Tax: ${totalBeforeTax.toFixed(2)}</h5>
      <h3 className="text-danger">Order Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
