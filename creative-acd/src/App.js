import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Shared/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";
import ServiceDetails from "./Components/Home/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route
          path="/homeService/:serviceId"
          element={<ServiceDetails />}
        ></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
