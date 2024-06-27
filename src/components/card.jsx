// Card.js
import { Basket, ShoppingCart, Star } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Products from "../data/dataCoffe";

export const Card = ({ title, img }) => {
  const rupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="bg-white backdrop-blur-md text-start overflow-hidden hover:shadow-lg transition duration-300 w-fit my-2">
      <div className="flex justify-center items-center flex-col text-black font-semibold shadow-sm object-fill w-[200px] h-fit">
        <div id="des" className="w-full">
          <img
            src={img}
            alt=""
            className="w-full object-center object-fill rounded-t-md rounded-b-sm block mx-auto h-[220px] relative"
            id="des"
          />
        </div>
        <div className="flex justify-center items-center flex-col w-full px-4 py-2 gap-1">
          <div className="text-sm flex justify-center items-center gap-1">
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
          <h3 className="font-normal">{title}</h3>
          <div className="flex justify-between items-center w-full ">
            <Basket
              size={32}
              className=" text-primary border border-primary p-1 rounded-full"
            />
            <h3 className="text-black font-bold">Rp. 10.000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
