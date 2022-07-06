const addToDb = (id) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = shoppingCart[id] + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};

export { addToDb };
