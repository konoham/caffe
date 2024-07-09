import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useErrorMessage, useUser } from "../utility/Store";
import { Basket, List } from "@phosphor-icons/react";
import Cart from "./Cart/Cart";

export default function Navbar() {
  const [change, setChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const user = useUser((state) => state.user);
  const messageError = useErrorMessage((state) => state.messageError);
  const checkScroll = () => {
    if (window.scrollY) {
      setIsOpen(false);
      setOpenCart(false);
      if (window.scrollY >= 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    }
  };

  window.addEventListener("scroll", checkScroll);

  useEffect(() => {
    if (messageError) {
      setOpenCart(true);
      // alert("iufgaifgaifg");
    }
  }, [messageError]);

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap w-full z-50 fixed bg-opacity-90 text-sm py-3 shadow-sm text-white ${change ? "bg-primary" : "bg-transparent"} duration-300`}
    >
      <nav className="md:px-56 w-full mx-auto px-4 flex items-center justify-between relative">
        <div className="flex items-center justify-between">
          <a
            className={`flex-none text-2xl font-bold flex justify-center items-center gap-2 ${change ? "text-white" : "text-primary"}`}
            href="/"
          >
            <img src="/iconweb.svg" className="w-8 h-8" />
            AROMA
          </a>
        </div>

        <div
          id=""
          className={`absolute bottom-0 top-full ${isOpen ? "right-0 " : "-right-52"} bg-black md:static md:bg-transparent flex flex-col justify-start items-center md:block`}
        >
          <div className="flex flex-col px-4 gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-white ms-10">
            <a
              className={`font-semibold text-sm ${change ? "text-white" : "text-primary hover:text-white"}`}
              href="/"
            >
              Home
            </a>
            <a
              className="font-semibold text-sm hover:text-primary "
              href="#keunggulan"
            >
              Keunggulan
            </a>
            <a
              className="font-semibold text-sm hover:text-primary "
              href="#keunggulan"
            >
              Kategori
            </a>
            <a
              className="font-semibold text-sm hover:text-primary "
              href="/#special-Coffee"
            >
              Pruduct
            </a>
            <a className="font-semibold text-sm hover:text-primary " href="#">
              Special Product
            </a>
            <div className=" w-[30px] hidden">
              <span className=" bg-black block w-full "></span>
              <span className=" bg-black block w-full"></span>
              <span className=" bg-black block w-full"></span>
            </div>
          </div>
        </div>
        <div className="w-fit flex justify-center items-center gap-2">
          {!user ? (
            <Link to={`/Login`} className="w-fit">
              <button
                className={`font-semibold text-sm py-2 px-5 rounded-lg me-[-5rem] ${change ? "text-primary bg-white hover:text-black" : "text-white bg-primary hover:text-black"}`}
                href="#"
              >
                Login
              </button>
            </Link>
          ) : (
            <details className="relative">
              <summary className="list-none">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.pinimg.com/564x/45/b6/fa/45b6fa403c4dd5f8f09a58a7d6d7453a.jpg"
                  }
                  className="w-8 h-8 rounded-full"
                />
              </summary>
              <p className="absolute bottom-[-20px] left-[-4rem] text-xs">
                {user.email}
              </p>
            </details>
          )}
        </div>
        <div className="flex justify-center items-center">
          <List
            onClick={() => setIsOpen((prev) => !prev)}
            size={32}
            className="md:hidden block"
          />
          <Basket
            onClick={() => setOpenCart((prev) => !prev)}
            size={32}
            className=" block"
          />
        </div>
        <div
          class={`absolute z-[99999] top-full bottom-0 pointer-events-auto w-[450px] ${openCart ? "right-0" : "right-[-100rem]"}`}
        >
          <Cart setOpenCart={setOpenCart} />
        </div>
      </nav>
    </header>
  );
}
