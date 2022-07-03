import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Header />
      <Shop />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
