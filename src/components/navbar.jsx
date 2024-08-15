import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useErrorMessage, useUser } from "../utility/Store";
import { Basket, List, SignOut } from "@phosphor-icons/react";
import Cart from "./Cart/Cart";
import { firesignOut } from "../utility/firebase";

export default function Navbar() {
  const [change, setChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { user } = useUser();

  useEffect(() => {
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

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // const handleSignOut = async () => {
  //   const response = await firesignOut();
  //   localStorage.removeItem("user");
  //   console.log(response);
  // };

  return (
    <header
      className={`fixed z-50 flex w-full flex-wrap bg-opacity-90 py-3 text-sm text-white shadow-sm sm:flex-nowrap sm:justify-start ${change ? "bg-primary" : "bg-transparent"} duration-300`}
    >
      <nav className="relative mx-auto flex w-full items-center justify-between px-4">
        <div className="flex items-center justify-between">
          <a
            className={`flex flex-none items-center justify-center gap-2 text-2xl font-bold ${change ? "text-white" : "text-primary"}`}
            href="/"
          >
            <img src="/iconweb.svg" className="h-8 w-8" />
            AROMA
          </a>
        </div>

        <div
          id=""
          className={`absolute bottom-0 top-3/4 ${isOpen ? "right-0" : "-right-52"} flex w-56 flex-col items-center justify-start md:static md:block md:justify-center md:bg-transparent`}
        >
          <div className="ms-3 mt-5 flex min-h-svh w-full flex-col items-center gap-5 rounded-s-md bg-white px-4 pt-4 text-black sm:mt-0 sm:flex-row sm:justify-end sm:ps-5 md:min-h-full md:w-fit md:bg-transparent md:pt-0">
            <div className="flex items-center justify-center gap-2 md:hidden">
              <img
                src={user?.photoURL ? user?.photoURL : "/iconweb.svg"}
                className="size-8 rounded-full"
              />
              <p className="text-xs">{user?.email}</p>
            </div>
            <a
              className={`text-sm font-semibold ${change ? "text-white" : "text-primary hover:text-white"}`}
              href="/"
            >
              Home
            </a>
            <a
              className="text-sm font-semibold hover:text-primary"
              href="#keunggulan"
            >
              Keunggulan
            </a>
            <a
              className="text-sm font-semibold hover:text-primary"
              href="#top-categori"
            >
              Kategori
            </a>
            <a
              className="text-sm font-semibold hover:text-primary"
              href="#special-Coffee"
            >
              Pruduct
            </a>
            <a
              className="whitespace-nowrap text-sm font-semibold hover:text-primary"
              href="#special-product"
            >
              Special Product
            </a>
            <div className="hidden w-[30px]">
              <span className="block w-full bg-black"></span>
              <span className="block w-full bg-black"></span>
              <span className="block w-full bg-black"></span>
            </div>
          </div>
        </div>
        <div className="flex w-fit items-center justify-center gap-2">
          {!user ? (
            <Link to={`/auth`} className="w-fit">
              <button
                className={`me-[-5rem] rounded-lg px-5 py-2 text-sm font-semibold ${change ? "bg-white text-primary hover:text-black" : "bg-primary text-white hover:text-black"}`}
                href="#"
              >
                Login
              </button>
            </Link>
          ) : (
            <details className="relative hidden md:inline-block">
              <summary className="list-none">
                <img
                  src={user.photoURL ? user.photoURL : "/iconweb.svg"}
                  className="size-8 rounded-full"
                />
              </summary>
              <p className="absolute bottom-[-20px] left-[-4rem] text-xs">
                {user.email}
              </p>
            </details>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          {user && (
            <Basket
              onClick={() => setOpenCart((prev) => !prev)}
              size={28}
              className="block"
            />
          )}
          <List
            onClick={() => setIsOpen((prev) => !prev)}
            size={32}
            className="block md:hidden"
          />

          {/* <button onClick={handleSignOut} className="h-fit w-fit">
            <SignOut size={32} />
          </button> */}
        </div>
        <div
          className={`pointer-events-auto absolute bottom-0 top-full z-[99999] w-[450px] ${openCart ? "right-0" : "right-[-100rem]"}`}
        >
          <Cart setOpenCart={setOpenCart} open={openCart} />
        </div>
      </nav>
    </header>
  );
}
