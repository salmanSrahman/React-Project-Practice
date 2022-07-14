const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};
// get shopping cart information

const addToDb = (id) => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //   quantity
  let quantity = storedCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    storedCart[id] = newQuantity;
  } else {
    quantity = 1;
  }
  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};
// add to db

const removeFromDb = (id) => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-Cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  if (id in storedCart) {
    delete storedCart[id];
  }
  localStorage.setItem("shopping-Cart", JSON.stringify(shoppingCart));
};
// delete from shopping cart

const clearTheCart = () => {
  localStorage.removeItem("shopping-Cart");
};
// clear the cart

export { getStoredCart, addToDb, removeFromDb, clearTheCart };