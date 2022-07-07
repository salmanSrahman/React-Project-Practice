import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
