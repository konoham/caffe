import React, { useState } from "react";
import { signUpGoogle, singIn, singUp } from "../../utility/firebase";
import { useForm } from "react-hook-form";
import { useUser } from "../../utility/Store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormPage = () => {
  const [ViewPosition, setViewPosition] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const setUser = useUser((state) => state.setUser);
  const navigate = useNavigate();
  const handleView = (e) => {
    e.preventDefault();
    setViewPosition((prev) => !prev);
  };

  const schema = yup
    .object({
      email: yup.string().required().email(),
      password: yup.string().max(15).min(4).required(),
      // email2: yup.string().required().email(),
      // password2: yup.string().max(15).min(4).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const SignIn = async (value) => {
    const { email, password } = value;
    const req = await singIn(email, password);
    console.log(req);
    console.log(req.code);
    if (req.code) {
      switch (req.code) {
        case "auth/invalid-email":
          setErrorMessage(
            "Email yang Anda masukkan tidak valid. Harap periksa kembali."
          );
          break;
        default:
          setErrorMessage(
            "Terjadi kesalahan saat masuk. Silakan coba lagi nanti."
          );
          break;
      }
    }
    localStorage.setItem("user", JSON.stringify(req.user));
    const Storege = localStorage.getItem("user");
    setUser(JSON.parse(Storege));
    navigate("/");
  };
  const SignUp = async (value) => {
    const { email2, password2 } = value;
    const req = await singUp(email2, password2);
    console.log(req);
    if (req.code) {
      switch (req.code) {
        case "auth/email-already-in-use":
          setErrorMessage("Akun Anda sudah terdaftar. Silahkan login kembali.");
          break;
        default:
          setErrorMessage(
            "Terjadi kesalahan saat masuk. Silakan coba lagi nanti."
          );
          break;
      }
    }
    localStorage.setItem("user", JSON.stringify(req.user));
    const Storege = localStorage.getItem("user");
    setUser(JSON.parse(Storege));
    navigate("/");
  };
  const signUpwhithGoogle = async () => {
    const response = await signUpGoogle();
    localStorage.setItem("user", JSON.stringify(response.user));
    const Storege = localStorage.getItem("user");
    setUser(JSON.parse(Storege));
    navigate("/");
  };

  return (
    <section className="h-svh w-screen bg-[#F9F6F1] flex justify-center items-center px-10 gap-4 box-border">
      <form
        onSubmit={handleSubmit(SignIn)}
        className={`w-full md:w-1/2 mx-auto pt-20 duration-[3s] ${ViewPosition ? "opacity-100 scale-100 " : "opacity-0 scale-0 hidden md:block"}`}
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
            {...register("email")}
          />
          {errors && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.email?.message}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm">{errorMessage}</p>
          )}
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
            {...register("password")}
          />
          {errors && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.password?.message}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm">{errorMessage}</p>
          )}
        </div>
        <input
          type="submit"
          className="bg-primary py-2 px-5 rounded-xl text-base font-semibold text-white"
        />
        <div className="flex justify-center items-center flex-col gap-2 w-full md:hidden">
          <p className="ps-4 mt-4">
            {ViewPosition ? "belum punya akun?" : "   sudah punya akun?"}
            <span onClick={(e) => handleView(e)} className="text-primary">
              {ViewPosition ? " sign Up" : " Login"}
            </span>
          </p>
          <button
            type="button"
            onClick={() => signUpwhithGoogle()}
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>
      <form
        onSubmit={handleSubmit(SignUp)}
        className={`w-full md:w-1/2 mx-auto pt-20 duration-[3s]  ${ViewPosition ? "opacity-0 scale-0 hidden md:block" : " opacity-100 scale-100 "}`}
      >
        <h1 className="uppercase text-center w-full text-2xl font-bold">
          sign Up
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
            id="email2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400 "
            placeholder="name@flowbite.com"
            {...register("email2")}
          />
          {errors && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.email2?.message}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm">{errorMessage}</p>
          )}
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
            id="password2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 placeholder-gray-400"
            {...register("password2")}
          />
          {errors && (
            <p className="text-red-500 font-semibold text-sm">
              {errors.password2?.message}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm">
              {errorMessage} <span onClick={(e) => handleView(e)}>login</span>
            </p>
          )}
        </div>

        <input
          type="submit"
          className="bg-primary py-2 px-5 rounded-xl text-base font-semibold text-white"
        />
        <div className="flex justify-center items-center flex-col gap-2 w-full md:hidden">
          <p className="mt-4">
            {ViewPosition ? "belum punya akun?" : "   sudah punya akun?"}
            <span onClick={(e) => handleView(e)} className="text-primary">
              {ViewPosition ? " sign Up" : " Login"}
            </span>
          </p>
          <button
            type="button"
            onClick={() => signUpwhithGoogle()}
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fill-rule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign Up with Google
          </button>
        </div>
      </form>
      <div
        className={`layer hidden md:block bg-primary absolute top-0 bottom-0  w-1/2  bg-[url('/asset/icon.png')] bg-no-repeat bg-center overflow-hidden ${ViewPosition ? "animateright rounded-l-3xl " : "animateLeft rounded-r-3xl "}`}
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
          <p>{ViewPosition ? " sudah punya akun?" : " belum punya akun?"}</p>
          <button onClick={handleView} className="text-blue-500">
            {ViewPosition ? "sign Up" : "   Login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
