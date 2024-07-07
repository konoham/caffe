import { Card } from "../card/card";
import "swiper/css";
import "swiper/css/navigation";
import { DataSpecialProduct } from "../../data/dataFood";
console.log(DataSpecialProduct);

export const SpecialProduct = () => {
  return (
    <div className="mb-8 rounded-xl w-full text-center">
      <h1 className="mt-4 mb-6 text-3xl font-bold text-black md:text-2xl">
        Special Product
      </h1>
      <div className="w-full flex container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 md:gap-8 w-full relative">
          {DataSpecialProduct.map((e, i) => (
            <Card name={e.name} images={e.images} price={e.price} />
          ))}
        </div>
      </div>
    </div>
  );
};
