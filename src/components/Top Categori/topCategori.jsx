import React from "react";
import Categori from "./Categori";

const TopCategori = () => {
  return (
    <div className="w-full text-center my-8">
      <h1 className="my-4 text-black font-bold text-2xl capitalize">
        top categori
      </h1>
      <div className="w-full flex justify-center items-center flex-wrap gap-8 ">
        <Categori
          title={"Espresso"}
          path={"/Categori/Espresso"}
          image={"./Top Categori/1.jpg"}
        />
        <Categori
          title={"Brewed"}
          path={"/Categori/Brewed"}
          image={"./Top Categori/2.jpg"}
        />
        <Categori
          title={"Specialty"}
          path={"/Categori/Specialty"}
          image={"./Top Categori/3.jpg"}
        />
      </div>
    </div>
  );
};

export default TopCategori;
