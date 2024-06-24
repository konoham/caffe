import React from "react";
import { LoginComp } from "../components/LoginComp";

export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <LoginComp />
      </div>
    </div>
  );
};
