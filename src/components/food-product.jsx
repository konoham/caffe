import { Card } from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FoodItems } from "../data/dataFood";
import React from "react";

export const FoodProducts = () => {
  return (
    <div className="mb-8 rounded-xl w-full text-center">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-black md:text-2xl">
        Our Special Coffee
      </h1>
      <div className="w-full flex justify-center items-center container mx-auto">
        <Swiper
          spaceBetween={5}
          slidesPerView={7}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="w-full"
        >
          {FoodItems.map((e, i) => (
            <React.Fragment key={i}>
              <SwiperSlide className="flex flex-col md:flex-row md:justify-center w-full relative">
                <Card key={e.id} title={e.title} img={e.img} />
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
