import { useEffect, useState } from "react";

const useCocktail = () => {
  const [cocktails, setCocktails] = useState([]);
  const [seeDetail, setSeeDetail] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  const seeDetails = (cocktail) => {
    setSeeDetail(cocktail);
  };

  const addToCart = (selectedCocktail) => {
    const newCart = [...cart, selectedCocktail];
    setCart(newCart);
  };

  return [
    cocktails,
    setCocktails,
    seeDetail,
    setSeeDetail,
    cart,
    setCart,
    seeDetails,
    addToCart,
  ];
};

export default useCocktail;
