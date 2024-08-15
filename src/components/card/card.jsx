// Card.js
import { Basket, Star } from "@phosphor-icons/react";

import { useUser } from "../../utility/Store";
import AddToCartBtn from "../AddToCart/addToCartBtn";

export const Card = (props) => {
  const { user } = useUser();

  const rupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="w-fit overflow-hidden bg-white text-start backdrop-blur-md transition duration-300 hover:shadow-lg">
      <div className="flex h-fit w-[195px] flex-col items-center justify-start gap-4 object-fill pb-4 font-semibold text-black shadow-sm">
        <div id="des" className="w-full">
          <img
            src={props.images}
            alt=""
            className="relative mx-auto block h-[220px] w-full rounded-b-sm rounded-t-md object-cover object-center"
            id="des"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 px-4">
          <div className="flex items-center justify-center gap-1 pb-2 text-sm">
            <i name="" id="">
              <Star />
            </i>
            <i name="" id="">
              <Star />
            </i>
            <i name="" id="">
              <Star />
            </i>
            <i name="" id="">
              <Star />
            </i>
            <i name="" id="">
              <Star />
            </i>
          </div>
          <h3 className="text-center font-semibold">{props.name}</h3>
          <div className="flex w-full items-center justify-between pe-4">
            {user?.email ? (
              <AddToCartBtn
                name={props.name}
                price={props.price}
                images={props.images}
                country={props.country}
                qty={props.qty}
              />
            ) : (
              <a href="/auth">
                <Basket
                  size={32}
                  className="rounded-full border border-primary p-1.5 text-primary"
                />
              </a>
            )}

            <h3 className="font-bold text-black">Rp.{props.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
