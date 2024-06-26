// Card.js
import { ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Card = ({ title, img, price, description, rating, id, type }) => {
  const [data, setData] = useState();
  const rupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const GetData = async () => {
    try {
      const req = await fetch("https://api.sampleapis.com/coffee/hot");
      const res = await req.json();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  // Fungsi untuk menentukan jenis URL berdasarkan jenis produk

  useEffect(() => {
    GetData();
  }, []);

  return (
    <Link
      to={`/${type}/${id}`}
      className="bg-white backdrop-blur-md text-start overflow-hidden hover:shadow-lg transition duration-300 w-fit my-2"
    >
      {data?.map((item) => (
        <>
          <div className="flex justify-center items-center flex-col text-black font-semibold shadow-sm object-fill w-[200px] h-fit">
            <img
              src={item.image}
              alt=""
              className="w-full object-center object-fill rounded-t-xl block mx-auto h-[220px]"
            />
            <div className="flex justify-center items-center flex-col w-full px-4 py-2">
              <div className="stars text-xs">⭐⭐⭐⭐⭐</div>
              <h3>{item.title}</h3>
              <div className="flex justify-between items-center w-full">
                <ShoppingCart size={32} />
                <h3>Rp. 3000</h3>
              </div>
            </div>
          </div>
        </>
      ))}
    </Link>
  );
};
