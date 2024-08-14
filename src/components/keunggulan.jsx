import { Gift } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import DataKenggulan from "../data/keunggulan ";

const Keunggulan = () => {
  return (
    <div
      className="container mx-auto my-12 w-full gap-8 ps-14 text-black md:overflow-x-hidden md:ps-10"
      id="keunggulan"
    >
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className=""
      >
        {DataKenggulan.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="second-card box-border flex items-center justify-center rounded-xl p-4">
              <Gift size={32} className="my-auto w-fit text-primary" />
              <div className="flex w-[90%] flex-shrink-0 flex-grow-0 flex-col items-start justify-center px-4 text-start">
                <h3 className="title w-full text-sm uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="explanation text-xs font-normal text-third">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Keunggulan;
