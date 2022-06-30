const addToDb = (id) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  //    add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = shoppingCart[id] + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// remove from db
const removeFromDb = (id) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export { addToDb, removeFromDb };
