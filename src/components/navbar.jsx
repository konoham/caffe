import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../utility/Store";
import { Hamburger } from "@phosphor-icons/react";

export default function Navbar() {
  const [change, setChange] = useState(false);
  const user = useUser((state) => state.user);
  const checkScroll = () => {
    window.scrollY >= 100 ? setChange(true) : setChange(false);
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full fixed bg-opacity-90 text-sm py-3 shadow-sm text-white ${change ? "bg-primary" : "bg-transparent"} duration-300`}
    >
      <nav className="md:px-10 w-full mx-auto px-4 flex items-center justify-between relative">
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
          className="absolute -right-52 bottom-0 top-full bg-black flex flex-col justify-start items-center md:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-white ms-10">
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
                className={`font-semibold text-sm py-2 px-5 rounded-lg ${change ? "text-primary bg-white hover:text-black" : "text-white bg-primary hover:text-black"}`}
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
        <Hamburger size={24} />
      </nav>
    </header>
  );
}
