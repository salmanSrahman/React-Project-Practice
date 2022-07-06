import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakeDb";

// load data from local storage & set in cart

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = getStoredCart();
    let savedCart = [];
    for (const key in storedCart) {
      const addedProduct = products.find((product) => product.key === key);
      if (addedProduct) {
        const quantity = storedCart[key];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};

export { useCart };
