import { Card } from "./card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FoodItems } from "../data/dataFood";
import { useNavigate } from "react-router-dom";

export const FoodProducts = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: "block", background: "grey" }} onClick={onClick} />;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Untuk desktop
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024, // Untuk laptop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Untuk handphone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mb-8 shadow-sm rounded-xl w-full text-center">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-white md:text-2xl">Our Special Coffee</h1>
      <div className="w-full flex justify-center items-center">
        <Slider className="w-full px-4 flex flex-col gap-4 md:flex-row md:justify-center md:w-4/5" {...settings}>
          {FoodItems.map((e) => (
            <Card key={e.id} title={e.title} price={e.price} description={e.description} img={e.img} rating={e.rate} id={e.id} type={e.type} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
