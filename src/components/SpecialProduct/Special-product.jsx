import { Card } from "../card/card";
import "swiper/css";
import "swiper/css/navigation";
import { DataSpecialProduct } from "../../data/dataFood";
console.log(DataSpecialProduct);

export const SpecialProduct = () => {
  return (
    <div className="mt-6 w-full space-y-6 rounded-xl text-center">
      <h1 className="text-3xl font-bold text-black md:text-2xl">
        Special Product
      </h1>
      <div className="container mx-auto flex w-full">
        <div className="relative grid w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:gap-8">
          {DataSpecialProduct.map((e, i) => (
            <div className="h-full w-full" key={i}>
              <Card name={e.name} images={e.images} price={e.price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
