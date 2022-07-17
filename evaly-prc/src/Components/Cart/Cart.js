import React from "react";
import "./Cart.css";
import { Button } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = ({clearCart, cart, children }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    quantity = quantity + product?.quantity;
    price = price + product?.price * product?.quantity;
    shipping = shipping + product?.shipping * product?.quantity;
  }
  const beforeTax = shipping + price;
  const tax = beforeTax * 0.1;
  const totalPrice = beforeTax + shipping + tax;

  return (
    <div className="cart__container">
      <h3>Order Summary</h3>
      <h5>Items Ordered: {quantity}</h5>
      <h5>Before Tax: ${price.toFixed(2)}</h5>
      <h5>Shipping & Handling: ${shipping.toFixed(2)}</h5>
      <h5>Total Before Tax: ${beforeTax.toFixed(2)}</h5>
      <h5>Total Tax: ${tax.toFixed(2)}</h5>
      <h4 className="text-danger">Order Total: ${totalPrice.toFixed(2)}</h4>
      <Button
        variant="danger"
        className="d-block w-100 d-flex justify-content-between"
        onClick={()=> clearCart()}
      >
        <span className="fw-bold">Clear Cart</span>
        <span>
          <RiDeleteBin5Line className="fs-4" />
        </span>
      </Button>
      {children}
    </div>
  );
};

export default Cart;
