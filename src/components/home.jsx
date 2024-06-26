import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DataSlide from "../data/slide";

export const HomePage = () => {
  return (
    <div className="w-full h-[700px] hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        {DataSlide.map((item) => (
          <>
            <SwiperSlide className="w-full">
              <img
                className="relative w-full h-full block object-cover bg-top"
                src={item.img}
              />
              <div className="container me-auto absolute top-1/2 left-1/2 translate-x-[-50%]">
                <h1
                  className="text-5xl font-bold capitalize w-1/3 text-wrap tracking-wide md:mb-4"
                  id="textHome"
                >
                  {item.description}
                </h1>
                <a className="py-3 px-4 font-semibold rounded-lg text-white hover:bg-gray-900 disabled:opacity-50 mt-4 bg-primary md:px-4 md:py-2  md:text-sm ">
                  Beli Sekarang
                </a>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};
