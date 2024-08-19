import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../utility/Store";
import { Basket, List } from "@phosphor-icons/react";
import Cart from "./Cart/Cart";
import { useRef } from "react";

export default function Navbar() {
  const [change, setChange] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const sidebar = useRef(null);
  const triger = useRef(null);

  const handleClose = (event) => {
    if (
      sidebar.current &&
      !sidebar.current.contains(event.target) &&
      triger.current &&
      !triger.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
  window.addEventListener("click", handleClose);

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
          <div
            ref={sidebar}
            className={`anav ms-3 mt-5 flex min-h-svh w-full flex-col items-start justify-start gap-5 rounded-s-md bg-white px-4 pt-4 md:items-center ${change ? "text-black" : "text-white"} whitespace-nowrap text-sm font-semibold sm:mt-0 sm:flex-row sm:justify-end sm:ps-5 md:min-h-full md:w-fit md:bg-transparent md:pt-0 md:text-white`}
          >
            <a
              className={`md:after:bg-white ${change ? "text-white" : "text-primary hover:text-white"}`}
              href="/"
            >
              Home
            </a>
            <a
              className={` ${change ? "text-black after:bg-white hover:text-white" : "text-white after:bg-primary hover:text-primary"} `}
              href="#keunggulan"
            >
              Keunggulan
            </a>
            <a
              className={` ${change ? "text-black after:bg-white hover:text-white" : "text-white after:bg-primary hover:text-primary"} `}
              href="#top-categori"
            >
              Kategori
            </a>
            <a
              className={` ${change ? "text-black after:bg-white hover:text-white" : "text-white after:bg-primary hover:text-primary"} `}
              href="#special-Coffee"
            >
              Pruduct
            </a>
            <a
              className={` ${change ? "text-black after:bg-white hover:text-white" : "text-white after:bg-primary hover:text-primary"} `}
              href="#special-product"
            >
              Special Product
            </a>
            <div className="hidden w-[30px] cursor-progress">
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
            <>
              {!user && (
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
            </>
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
            ref={triger}
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
