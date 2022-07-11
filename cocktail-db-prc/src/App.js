import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import CheckOut from "./Components/CheckOut/CheckOut";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/home" element={<Shop />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
