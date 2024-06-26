import React from "react";

const ProductPageComponent = ({ product }) => {
  // Destructure product from props
  const Section = () => {
    return (
      <div className="bg-white border rounded-xl shadow-sm md:flex-row md:justify-center flex flex-col  ">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <img className="size-full absolute top-0 start-0 object-cover" src={product.img} alt={product.title} />
        </div>
        <div className="flex flex-wrap md:pt-[7%]">
          <div className="p-4 flex flex-col h-full sm:p-7">
            <h3 className="text-lg font-bold text-gray-800 ">{product.title}</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{product.description}</p>
            <p className="mt-3 font-bold text-gray-800 ">Price: Rp. {product.price}</p>
            <div className="mt-auto">
              <p className="text-xs text-gray-500 ">Country: {product.country}</p>
              <p className="text-xs text-gray-500">Rating: {product.rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <Section />;
};

export default ProductPageComponent;
