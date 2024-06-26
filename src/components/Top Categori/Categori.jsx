import React from "react";

const Categori = () => {
  return (
    <div className="w-full text-center my-8">
      <h1 className="my-4 text-black font-bold text-2xl capitalize">
        top categori
      </h1>
      <div className="w-full flex justify-center items-center gap-8 ">
        <div className="w-[220px] h-fit relative">
          <img
            src="./Top Categori/1.jpg"
            className="w-full h-[230px] rounded-xl z-[1]"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-white">
            <h1>expresso</h1>
            <a href="/">view more</a>
          </div>
        </div>
        <div className="w-[220px] h-fit relative">
          <img
            src="./Top Categori/2.jpg"
            className="w-full h-[230px] rounded-xl z-[1]"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-white">
            <h1>expresso</h1>
            <a href="/">view more</a>
          </div>
        </div>
        <div className="w-[220px] h-fit relative">
          <img
            src="./Top Categori/3.jpg"
            className="w-full h-[230px] rounded-xl z-[1]"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-white">
            <h1>expresso</h1>
            <a href="/">view more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categori;
