const addToDb = (id) => {
  const quantity = localStorage.getItem(id);

  if (quantity) {
    console.log(quantity);
    const newQuantity = parseFloat(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};

export default addToDb;
