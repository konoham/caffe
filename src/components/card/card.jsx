// Card.js
import { Basket, Star } from "@phosphor-icons/react";

import { useUser } from "../../utility/Store";
import AddToCartBtn from "../AddToCart/addToCartBtn";

export const Card = (props) => {
  const user = useUser((state) => state.user);

  const rupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="bg-white backdrop-blur-md text-start overflow-hidden hover:shadow-lg transition duration-300 w-fit my-2">
      <div className="flex justify-start items-center flex-col gap-4 pb-4 text-black font-semibold shadow-sm object-fill w-[195px] h-fit">
        <div id="des" className="w-full">
          <img
            src={props.images}
            alt=""
            className="w-full object-center object-cover rounded-t-md rounded-b-sm block mx-auto h-[220px] relative"
            id="des"
          />
        </div>
        <div className="flex justify-center items-center flex-col w-full px-4 gap-1">
          <div className="text-sm flex justify-center items-center gap-1 pb-2">
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
          <h3 className="font-semibold text-center">{props.name}</h3>
          <div className="flex justify-between items-center w-full pe-4">
            {user?.email ? (
              <AddToCartBtn
                name={props.name}
                price={props.price}
                images={props.images}
                country={props.country}
                qty={props.qty}
              />
            ) : (
              <a href="/Login">
                <Basket
                  size={32}
                  className="text-primary border border-primary p-1.5 rounded-full"
                />
              </a>
            )}

            <h3 className="text-black font-bold">Rp.{props.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
