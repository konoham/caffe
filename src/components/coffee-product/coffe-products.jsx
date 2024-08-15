import { Card } from "../card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useEffect, useState } from "react";
import CoffeeType from "../coffee Type/coffeeType";
import SwitchType from "../../feature/swicthTypeCoffee";

export const CoffeProducts = () => {
  const [path, setPath] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    const setType = SwitchType(path);
    setData(setType);
  }, [path]);

  const setpath = (path, e) => {
    e.preventDefault();
    setPath(path);
  };

  return (
    <div className="mb-8 w-full rounded-xl text-center" id="special-Coffee">
      <h1 className="mb-6 mt-4 text-3xl font-bold text-black md:text-2xl">
        Our Special Coffee
      </h1>
      <div className="mb-5 mt-0 flex w-full items-center justify-center gap-4 text-sm font-normal">
        <CoffeeType text={"featured"} setpath={setpath} />
        <CoffeeType text={"latest"} setpath={setpath} />
        <CoffeeType text={"Bestseller"} setpath={setpath} />
      </div>

      <div className="container mx-auto flex w-full items-center justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          {data?.map((e, i) => (
            <SwiperSlide
              key={i}
              className="relative flex w-full flex-col md:flex-row md:justify-center"
            >
              <Card
                name={e.name}
                price={e.price}
                images={e.images}
                country={e.country}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
