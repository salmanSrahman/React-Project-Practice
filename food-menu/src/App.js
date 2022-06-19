import { useState } from "react";
import "./App.css";
import MenuItem from "./Components/MenuItems/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import items from "./data";
import Catagories from "./Components/Catagories/Catagories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <Catagories
        categories={categories}
        filterItems={filterItems}
      ></Catagories>
      <MenuItem items={menuItems}></MenuItem>
    </div>
  );
}

export default App;
