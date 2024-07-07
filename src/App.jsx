import "./App.css";
import Navbar from "./components/navbar";
import { HomePage } from "./components/Hero/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Keunggulan from "./components/keunggulan";
import Categori from "./components/Top Categori/Categori";
import Picture from "./components/ProfilPicture/Picture";
import { CoffeProducts } from "./components/coffee-product/coffe-products";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/footer";
import { SpecialProduct } from "./components/SpecialProduct/Special-product";
import FormPage from "./components/Form/Form";
import CategoriPage from "./pages/Categori";
import Cart from "./components/Cart/Cart";
import { useErrorMessage, useUser } from "./utility/Store";
import ModalIncreas from "./components/modal/modalIncreas";

function App() {
  const setUser = useUser((state) => state.setUser);
  const messageError = useErrorMessage((state) => state.messageError);
  const Storege = localStorage.getItem("user");

  if (Storege) {
    setUser(JSON.parse(Storege));
  }

  return (
    <Router>
      <div className="bg-[#F9F6F1]" id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Login" element={<FormPage />} />
          <Route path="/Categori" element={<CategoriPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        {messageError ? <ModalIncreas /> : null}
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
      <SpecialProduct />
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
