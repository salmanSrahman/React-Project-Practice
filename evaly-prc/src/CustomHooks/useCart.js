import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakeDb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    if (products.length) {
      let savedCart = [];
      for (const key in storedCart) {
        const addedProduct = cart.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = storedCart[key];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
        }
      }
      setCart(savedCart);
    }
  }, [products, cart]);

  return [cart, setCart];
};

export default useCart;
