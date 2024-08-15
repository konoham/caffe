import React from "react";

const Categori = ({ title, path, image }) => {
  return (
    <div className="relative h-fit w-4/5 md:w-[220px]">
      <img src={image} className="z-[1] h-[230px] w-full rounded-xl" alt="" />
      <div className="absolute left-1/2 top-1/2 z-10 translate-x-[-50%] translate-y-[-50%] text-white">
        <h1 className="text-xl font-bold text-primary">{title}</h1>
        <a href={path}>view more</a>
      </div>
    </div>
  );
};

export default Categori;
