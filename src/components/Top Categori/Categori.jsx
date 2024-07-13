import React from "react";

const Categori = ({ title, path, image }) => {
  return (
    <div className="w-[220px] h-fit relative">
      <img src={image} className="w-full h-[230px] rounded-xl z-[1]" alt="" />
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-white">
        <h1 className="text-primary font-bold text-xl">{title}</h1>
        <a href={path}>view more</a>
      </div>
    </div>
  );
};

export default Categori;
