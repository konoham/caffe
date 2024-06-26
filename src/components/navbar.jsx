import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full fixed bg-primary opacity-55 text-sm py-3 shadow-sm">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between ">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold " href="#">
            Brand
          </a>
        </div>
        <div id="" className="hidden sm:block">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-white ms-10">
            <a className="font-semibold text-sm text-blue-500 " href="#">
              Landing
            </a>
            <a className="font-semibold text-sm hover:text-gray-400 " href="#">
              Account
            </a>
            <a className="font-semibold text-sm hover:text-gray-400 " href="#">
              Work
            </a>
            <a className="font-semibold text-sm hover:text-gray-400 " href="#">
              Blog
            </a>
            <div className=" w-[30px] hidden">
              <span className=" bg-black block w-full "></span>
              <span className=" bg-black block w-full"></span>
              <span className=" bg-black block w-full"></span>
            </div>
          </div>
        </div>
        <div className="w-fit flex justify-center items-center gap-2">
          <Link to={`/RegisPage/login`} className="w-fit">
            <p
              className=" inline-flex justify-center items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600"
              href="#"
            >
              Login
            </p>
          </Link>
          <Link to={`/registrasi/sing-up`}>
            <p
              className="w-full inline-flex justify-center items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600"
              href="#"
            >
              sing up
            </p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
