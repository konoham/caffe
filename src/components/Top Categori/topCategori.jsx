import React from "react";
import Categori from "./Categori";

const TopCategori = () => {
  return (
    <div id="top-categori" className="my-8 w-full text-center">
      <h1 className="my-4 text-2xl font-bold capitalize text-black">
        top categori
      </h1>
      <div className="flex w-full flex-wrap items-center justify-center gap-8">
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
