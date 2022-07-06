import React from "react";
import Style from "./Cart.module.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let subTotal = 0;
  let shipping = 0;
  for (const product of cart) {
    subTotal = subTotal + product.price;
    shipping = shipping + product.shipping;
  }
  const totalBeforeTax = shipping + subTotal;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;

  return (
    <div className={`${Style.cart__container} p-3`}>
      <h4>Order Summary</h4>
      <h5>Items Ordered:{cart.length}</h5>
      <h5>Items: ${subTotal.toFixed(2)}</h5>
      <h5>Shipping & Handling: ${shipping.toFixed(2)}</h5>
      <h5>Total Before Tax: ${totalBeforeTax.toFixed(2)}</h5>
      <h3 className="text-danger">Order Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
