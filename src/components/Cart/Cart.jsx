import { useEffect, useState } from "react";

const Cart = ({ setOpenCart }) => {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
      const req = await fetch("http://localhost:2000/CART");
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
    <div class="flex h-svh flex-col z-30 shadow-xl">
      <div class="flex-1 px-4 py-6 sm:px-6 bg-white backdrop-blur-sm rounded-md overflow-y-auto">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Shopping cart
          </h2>
          <div class="ml-3 flex h-7 items-center">
            <button
              type="button"
              onClick={() => setOpenCart((prev) => !prev)}
              class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Close panel</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              {product &&
                product.map((item) => (
                  <li class="flex py-6" key={item.id}>
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.images}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{item.name}</a>
                          </h3>
                          <p class="ml-4">${item.price}</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">{item.country}</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty 1</p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Cart;
