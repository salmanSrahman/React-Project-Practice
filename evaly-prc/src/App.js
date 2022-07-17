import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import OrderReview from "./Components/OrderReview/OrderReview";
import Shop from "./Components/Shop/Shop";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="orderReview" element={<OrderReview />}></Route>
        <Route path="manageInventory" element={<ManageInventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
