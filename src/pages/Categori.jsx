import React, { useEffect, useState } from "react";

const CategoriPage = () => {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
      const req = await fetch("http://localhost:2000/product");
      const data = await req.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div className="relative overflow-x-auto mt-40">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              images
            </th>
          </tr>
        </thead>
        <tbody>
          {product?.map((item, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.price}</td>
              <td className="px-6 py-4">{item.images}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriPage;
