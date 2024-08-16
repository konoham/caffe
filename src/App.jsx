import { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { HomePage } from "./components/Hero/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Keunggulan from "./components/keunggulan";
import Categori from "./components/Top Categori/topCategori";
import Picture from "./components/ProfilPicture/Picture";
import { CoffeProducts } from "./components/coffee-product/coffe-products";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/footer";
import { SpecialProduct } from "./components/SpecialProduct/Special-product";
import { useUser } from "./utility/Store";
import TopCategori from "./components/Top Categori/topCategori";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  const { setUser } = useUser();

  useEffect(() => {
    const Storege = localStorage.getItem("user");
    if (!Storege) {
      return;
    }
    setUser(Storege);
  }, []);

  const FormPage = lazy(() => import("./components/Form/Form"));
  const CategoriPage = lazy(() => import("./pages/Categori"));
  const Cart = lazy(() => import("./components/Cart/Cart"));

  return (
    <Router>
      <div className="h-fit bg-[#F9F6F1]" id="main-container">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/auth" element={<FormPage />} />
            <Route path="/Categori/:type" element={<CategoriPage />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Suspense>
        <Toaster />
      </div>
    </Router>
  );
}

function MainContent() {
  return (
    <div className="h-fit w-full text-black" id="second-container">
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
