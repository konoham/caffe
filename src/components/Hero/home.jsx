import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import DataSlide from "../../data/slide";
import React from "react";

export const HomePage = () => {
  return (
    <div className="hero h-[300px] w-full md:h-[700px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-full w-full"
      >
        {DataSlide?.map((item, i) => (
          <SwiperSlide key={i} className="w-full">
            <img
              className="relative block h-full w-full bg-top object-cover"
              src={item.img}
            />
            <div className="container absolute top-1/2 mx-auto me-auto px-6 md:left-20 md:px-0">
              <h1
                className="mb-4 w-[60%] text-wrap text-2xl font-bold capitalize tracking-wide md:w-1/3 md:text-5xl"
                id="textHome"
              >
                {item.description}
              </h1>
              <a
                href="#special-Coffee"
                className="mt-4 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-50 md:px-4 md:py-2"
              >
                Beli Sekarang
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
