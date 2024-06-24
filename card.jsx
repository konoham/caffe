// Card.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Card = ({ title, img, price, description, rating, id, type }) => {
  const rupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // Fungsi untuk menentukan jenis URL berdasarkan jenis produk

  return (
    <Link
      to={`/${type}/${id}`}
      className="bg-white backdrop-blur-md text-start rounded-xl overflow-hidden hover:shadow-lg transition duration-300 w-full"
    >
      <div className=" h-fit text-white font-semibold border shadow-sm rounded-xl ">
        <img
          src={img}
          alt=""
          className="w-full object-cover object-center rounded-t-xl h-[250px]"
        />
        <div className="px-2">
          <h3 className="lg:text-lg text-black lg:font-bold font-light text-base md:text-lg">
            {title}{" "}
            <span className="">
              <i className="bi bi-star"></i>
            </span>{" "}
            <span className="text-sm font-medium text-center">{rating}</span>
          </h3>

          <p className="text-third md:text-base font-medium text-sm mb-2 overflow-hidden">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">{rupiah(price)}</p>
            {/* Menggunakan Link untuk navigasi ke halaman detail */}
            <button className="px-8 py-2 mb-2 bg-[#A4907C] text-white rounded-lg hover:bg-blue-700 transition duration-300">
              beli
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
