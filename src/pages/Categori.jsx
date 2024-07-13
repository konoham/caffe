import React, { useEffect, useState } from "react";
import { Card } from "../components/card/card";
import { useParams } from "react-router-dom";
import SwitchType from "../feature/swicthTypeCoffee";

const CategoriPage = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const setType = SwitchType(type);
    setData(setType);
  }, []);
  console.log(data);
  console.log(type);

  return (
    <div className="h-fit bg-[#F9F6F1]">
      <div className="h-[500px]">
        <img
          className=" w-full h-full object-cover bg-center"
          src="/asset/hero.categori.jpg"
          id="hero-categori"
        />
      </div>
      <div className=" relative container bg-transparent w-full h-full -mt-64">
        <h1 className=" text-6xl font-semibold text-primary">
          {type} COFFEE☕
        </h1>
        <div className="absolute top-20 z-10 grid grid-cols-7 gap-2 container">
          {data.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              images={item.images}
              country={item.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriPage;
