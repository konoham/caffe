import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [change, setChange] = useState(false);
  const checkScroll = () => {
    window.scrollY >= 100 ? setChange(true) : setChange(false);
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <header
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full fixed bg-opacity-90 text-sm py-3 shadow-sm text-white ${change ? "bg-primary" : "bg-transparent"} duration-300`}
    >
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a className="flex-none text-2xl font-bold text-black" href="/">
            Brand
          </a>
        </div>
        <div id="" className="hidden sm:block">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-white ms-10">
            <a
              className="font-semibold text-sm text-primary hover:text-white"
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
          <Link to={`/Login`} className="w-fit">
            <p className="font-semibold text-sm hover:text-primary " href="#">
              Login
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
