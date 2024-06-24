import { Card } from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Products from "../data/dataCoffe";

export const CoffeProducts = () => {
  const produk = Products;

  return (
    <div className="mb-8 shadow-sm rounded-xl w-full text-center">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-black md:text-2xl">
        Our Special Coffee
      </h1>
      <div className="w-full flex justify-center items-center container mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation={true}
          modules={[Navigation]}
          className="w-full"
        >
          {produk.map((e) => (
            <>
              <SwiperSlide className="flex flex-col md:flex-row md:justify-center w-full relative">
                <Card
                  key={e.id}
                  title={e.title}
                  price={e.price}
                  description={e.description}
                  img={e.img}
                  rating={e.rate}
                  type={e.type}
                  id={e.id}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
