import "./App.css";
import Navbar from "./components/navbar";
import { HomePage } from "./components/Hero/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductPage } from "./pages/product-detail";
import Keunggulan from "./components/keunggulan";
import Categori from "./components/Top Categori/Categori";
import Picture from "./components/ProfilPicture/Picture";
import { CoffeProducts } from "./components/coffee-product/coffe-products";
import { FoodProducts } from "./components/Food-Product/food-product";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/footer";

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
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
