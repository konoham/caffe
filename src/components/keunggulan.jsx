import { ArrowLineRight, CaretDoubleRight, Gift } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import DataKenggulan from "../data/keunggulan ";

const Keunggulan = () => {
  return (
    <div
      className="w-full container mx-auto md:ps-10 ps-14 gap-8 text-black md:overflow-x-hidden my-12"
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
            <div className="second-card flex justify-center box-border p-4 rounded-xl items-center">
              <Gift size={32} className="w-fit my-auto text-primary" />
              <div className="flex justify-center items-start flex-col flex-grow-0 flex-shrink-0 px-4 text-start w-[90%]">
                <h3 className="title uppercase text-sm tracking-tight w-full">
                  {item.title}
                </h3>
                <p className="explanation text-xs text-third font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <p className="w-full flex justify-center items-center pt-4 ms-[-1rem] text-slate-500 slide">
        <ArrowLineRight size={20} />
      </p> */}
    </div>
  );
};

export default Keunggulan;
