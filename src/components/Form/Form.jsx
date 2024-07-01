import React, { useState } from "react";

const FormPage = () => {
  const [ViewPosition, setViewPosition] = useState(true);
  const handleView = (e) => {
    e.preventDefault();
    setViewPosition((prev) => !prev);
  };

  return (
    <section className="h-svh w-screen bg-[#F9F6F1] flex justify-center items-center px-10 gap-4 box-border">
      <form
        className={`w-1/2 mx-auto pt-20 duration-[3s] ${ViewPosition ? "opacity-100 scale-100 " : "opacity-0 scale-0"}`}
      >
        <h1 className="uppercase text-center w-full text-2xl font-bold">
          login
        </h1>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded "
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
      <form
        className={`w-1/2 mx-auto pt-20 duration-[3s] ${ViewPosition ? "opacity-0 scale-0  " : "opacity-100 scale-100%"}`}
      >
        <h1 className="uppercase text-center w-full text-2xl font-bold">
          Sign Up
        </h1>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded "
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
      <div
        className={`layer bg-primary absolute top-0 bottom-0  w-1/2  bg-[url('/asset/icon.png')] bg-no-repeat bg-center overflow-hidden ${ViewPosition ? "animateright rounded-l-3xl " : "animateLeft rounded-r-3xl"}`}
      >
        <div className="w-full absolute top-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#8a3ffc7d"
              fill-opacity="1"
              d="M0,224L30,229.3C60,235,120,245,180,224C240,203,300,149,360,154.7C420,160,480,224,540,224C600,224,660,160,720,128C780,96,840,96,900,101.3C960,107,1020,117,1080,149.3C1140,181,1200,235,1260,250.7C1320,267,1380,245,1410,234.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="w-full absolute bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#8a3ffc7d"
              fill-opacity="1"
              d="M0,224L30,192C60,160,120,96,180,58.7C240,21,300,11,360,26.7C420,43,480,85,540,133.3C600,181,660,235,720,234.7C780,235,840,181,900,154.7C960,128,1020,128,1080,149.3C1140,171,1200,213,1260,192C1320,171,1380,85,1410,42.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-48 left-[25rem] text-center text-xl">
          <p>{ViewPosition ? "belum punya akun? " : "sudah punya akun?"}</p>
          <button onClick={handleView} className="text-blue-500">
            {ViewPosition ? "sign Up" : " Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
