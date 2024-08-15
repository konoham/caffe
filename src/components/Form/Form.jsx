import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn, signUp, signUpGoogle } from "../..//utility/firebase";
import { useUser } from "../../utility/Store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

const FormPage = () => {
  const [isSignUp, setisSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAuth = async (data) => {
    try {
      const { email, password } = data;
      const response = isSignUp
        ? await signUp(email, password)
        : await signIn(email, password);
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
      navigate("/");
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const response = await signUpGoogle();
      localStorage.setItem("user", JSON.stringify(response.user));
      setUser(response.user);
      navigate("/");
    } catch (error) {
      setErrorMessage("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/bg-auth.jpg')] bg-cover bg-no-repeat">
      <form
        onSubmit={handleSubmit(handleAuth)}
        className="w-full max-w-xl rounded-md bg-white/10 p-8 backdrop-blur-md"
      >
        <h2
          className="mb-6 text-center text-2xl font-bold uppercase"
          style={{ color: "#C6A078" }}
        >
          {isSignUp ? "Sign up" : "Login"}
        </h2>

        <div className="mb-4">
          <input
            {...register("email")}
            type="email"
            className={`w-full rounded-md border-b border-primary bg-transparent px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C6A078] ${errors.email ? "border-red-500" : ""}`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("password")}
            type="password"
            className={`w-full rounded-md border-b border-primary bg-transparent px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#C6A078] ${errors.password ? "border-red-500" : ""}`}
            placeholder="Password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              className="mr-2 rounded text-[#C6A078] focus:ring-[#C6A078]"
            />
            Remember me
          </label>
          <a href="#" className="text-[#C6A078] hover:text-[#C6A078]">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-[#C6A078] py-2 text-white hover:bg-[#C6A078]"
        >
          {isSignUp ? "Sign up" : "Login"}
        </button>

        <button
          onClick={signUpWithGoogle}
          className="mt-2 w-full rounded-md border border-primary bg-transparent py-2 text-white hover:bg-white hover:bg-opacity-15"
        >
          Sign in with Google
        </button>

        <div className="mt-4 text-center text-white">
          {!isSignUp
            ? "Don&apos;t have an account? "
            : "Already have an account?"}{" "}
          <span
            onClick={() => setisSignUp((prev) => !prev)}
            className="text-[#C6A078] hover:text-[#C6A078]"
          >
            {isSignUp ? "Register" : "Create"}
          </span>
        </div>

        {errorMessage && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default FormPage;
