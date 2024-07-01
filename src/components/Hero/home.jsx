import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import DataSlide from "../../data/slide";

export const HomePage = () => {
  return (
    <div className="w-full h-[300px] md:h-[700px] hero">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {DataSlide.map((item) => (
          <>
            <SwiperSlide className="w-full">
              <img
                className="relative w-full h-full block object-cover bg-top"
                src={item.img}
              />
              <div className="container me-auto absolute top-1/2 left-1/2 translate-x-[-50%] px-6 md:px-0">
                <h1
                  className="md:text-5xl font-bold capitalize md:w-1/3 w-1/2 text-2xl text-wrap tracking-wide mb-4"
                  id="textHome"
                >
                  {item.description}
                </h1>
                <a className="py-2 px-3 font-semibold rounded-lg text-white hover:bg-gray-900 disabled:opacity-50 mt-4 bg-primary md:px-4 md:py-2 text-sm ">
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
