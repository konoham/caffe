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
    <div className="h-[1024px] min-h-svh bg-gradient-to-br from-yellow-100 to-yellow-50">
      <div className="relative h-[500px]">
        <img
          className="h-full w-full bg-center object-cover"
          src="/asset/hero.categori.jpg"
          id="hero-categori"
        />
      </div>
      <div className="container absolute top-72 z-10 h-full w-full">
        <h1 className="text-6xl font-semibold uppercase text-primary">
          {type} COFFEE☕
        </h1>
        <div className="container flex flex-wrap items-center justify-center gap-2">
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
