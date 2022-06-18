import { useState } from "react";
import "./App.css";
import MenuItem from "./Components/MenuItems/MenuItem";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <div className="App">
      <h1>Our Menu</h1> 
       <MenuItem></MenuItem>
    </div>
  );
}

export default App;
