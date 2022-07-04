import React from "react";
import "./Cart.css";
import { ImCross } from "react-icons/im";
import { Button } from "react-bootstrap";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <h4>T-Shirt Selected:{cart.length}</h4>
        </div>
      ) : (
        <div>
          <h4>Please Add T- Shirt:</h4>
        </div>
      )}
      <div>
        {cart.map((tShirt) => (
          <div className="w-100 d-flex justify-content-between text-center cart__tShirt">
            <span className="fs-5 fw-bold">{tShirt.name}</span>{" "}
            <span className="fs-5 fw-bold">${tShirt.price}</span>{" "}
            <span
              onClick={() => removeFromCart(tShirt)}
              className="remove__btn"
            >
              <ImCross />
            </span>
          </div>
        ))}
        {cart.length > 0 ? (
          <Button className="d-block w-100" variant="success">
            Proceed Check Out
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
