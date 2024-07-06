import { Card } from "../card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useEffect, useState } from "react";
import CoffeeType from "../coffee Type/coffeeType";
import BestSeller from "../../data/dataCoffe";
import { IndoCoffee } from "../../data/indoCoffee";
import featured from "../../data/featured";

export const CoffeProducts = () => {
  const [data, setData] = useState([]);
  const [path, setPath] = useState("featured");

  useEffect(() => {
    switch (path) {
      case "featured":
        setData(featured);
        break;
      case "latest":
        setData(IndoCoffee);
        break;
      case "Bestseller":
        setData(BestSeller);
        break;
      default:
        break;
    }
  }, [path]);

  const setpath = (path, e) => {
    e.preventDefault();
    setPath(path);
  };

  return (
    <div className="mb-8 rounded-xl w-full text-center" id="special-Coffee">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-black md:text-2xl">
        Our Special Coffee
      </h1>
      <div className="flex justify-center items-center gap-4 w-full font-normal text-sm mt-0 mb-5">
        <CoffeeType text={"featured"} setpath={setpath} />
        <CoffeeType text={"latest"} setpath={setpath} />
        <CoffeeType text={"Bestseller"} setpath={setpath} />
      </div>

      <div className="w-full flex justify-center items-center container mx-auto">
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
              slidesPerView: 7,
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          {data?.map((e, i) => (
            <React.Fragment key={i}>
              <SwiperSlide className="flex flex-col md:flex-row md:justify-center w-full relative">
                <Card
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  images={e.images}
                  country={e.country}
                />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
