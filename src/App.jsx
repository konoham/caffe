import "./App.css";
import Navbar from "./components/navbar";
import { HomePage } from "./components/home";
import { CoffeProducts } from "./components/coffe-products";
import { FoodProducts } from "./components/food-product";
import { About } from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/product-detail";
import Keunggulan from "./components/keunggulan";
import Categori from "./components/Top Categori/Categori";
import Picture from "./components/ProfilPicture/Picture";

function App() {
  return (
    <Router>
      <div className="bg-[#F9F6F1]" id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:coffee/:id" element={<ProductPage />} />
          <Route path="/:breakfast/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainContent() {
  return (
    <div className="w-full h-fit text-black" id="second-container">
      <HomePage />
      <Keunggulan />
      <Categori />
      <CoffeProducts />
      <Picture />
      <FoodProducts />
      <About />
    </div>
  );
}
export default App;
