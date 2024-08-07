import "./App.css";
import Navbar from "./components/navbar";
import { HomePage } from "./components/Hero/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Keunggulan from "./components/keunggulan";
import Categori from "./components/Top Categori/topCategori";
import Picture from "./components/ProfilPicture/Picture";
import { CoffeProducts } from "./components/coffee-product/coffe-products";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/footer";
import { SpecialProduct } from "./components/SpecialProduct/Special-product";
import FormPage from "./components/Form/Form";
import CategoriPage from "./pages/Categori";
import Cart from "./components/Cart/Cart";
import { useUser } from "./utility/Store";
import TopCategori from "./components/Top Categori/topCategori";

function App() {
  const setUser = useUser((state) => state.setUser);
  const Storege = localStorage.getItem("user");

  if (Storege) {
    setUser(JSON.parse(Storege));
  }

  return (
    <Router>
      <div className="bg-[#F9F6F1] h-fit" id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Login" element={<FormPage />} />
          <Route path="/Categori/:type" element={<CategoriPage />} />
          <Route path="/Cart" element={<Cart />} />
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
      <TopCategori />
      <CoffeProducts />
      <Picture />
      <SpecialProduct />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
