import { useEffect, useState } from "react";
import {
  useCartSuccses,
  useErrorMessage,
  useIdProduct,
} from "../../utility/Store";
import { Minus, Plus } from "@phosphor-icons/react";
import usePatchProduct from "../../feature/usePatchProduct";
import useDeleteProduct from "../../feature/deletePoduct";
import Swal from "sweetalert2";
import BuyBtn from "./buyBtn";

const Cart = ({ setOpenCart }) => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState();
  const success = useCartSuccses((state) => state.success);
  const messageError = useErrorMessage((state) => state.messageError);

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const req = await fetch("http://localhost:2000/CART");
      const data = await req.json();
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateQtyAndPrice = async (qty, id) => {
    const req = await usePatchProduct(qty, id);
    const response = req;
    console.log(response);
  };

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const req = await useDeleteProduct(id);
        const response = req;
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    getProduct();
  }, [success, UpdateQtyAndPrice]);

  messageError && console.log(messageError?.name);

  return (
    <div className="flex h-svh flex-col z-30 shadow-xl">
      <div className="flex-1 px-4 py-6 sm:px-6 bg-white backdrop-blur-sm rounded-md overflow-y-auto">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              onClick={() => setOpenCart((prev) => !prev)}
              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Close panel</span>
              <svg
                className="h-6 w-6"
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

        <div className="mt-8">
          <div className="flow-root">
            {/* {!isLoading ? ( */}
            <ul role="list" className="-my-8 divide-y divide-gray-200">
              {product &&
                product.map((item) => (
                  <li
                    className={`flex py-6 ${messageError && messageError.name === item.name ? "bg-primary bg-opacity-15 bganimasi" : "bg-transparent"}`}
                    key={item.id}
                  >
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.images}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col text-black">
                      <div>
                        <div className="flex justify-between text-base font-medium ">
                          <h3>
                            <a href="#">{item.name}</a>
                          </h3>
                          <button
                            type="button"
                            className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => deleteProduct(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                        <p className=" mt-1 text-sm text-gray-500">
                          ${item.price * item.qty}
                        </p>
                      </div>
                      <div className="flex flex-1 items-center justify-between text-sm mt-5 -my-6">
                        <p className="text-gray-500">qty {item.qty}</p>
                        <div className="flex justify-center items-center gap-4 text-xl">
                          <Plus
                            size={20}
                            className="rounded-full p-1 bg-black text-white"
                            onClick={() =>
                              item.qty !== 0
                                ? UpdateQtyAndPrice(item.qty + 1, item.id)
                                : deleteProduct()
                            }
                          />
                          <h1 className="text-black text-xl">{item.qty}</h1>

                          <Minus
                            size={20}
                            className="rounded-full p-1 bg-black text-white"
                            onClick={() =>
                              item.qty >= 2
                                ? UpdateQtyAndPrice(item.qty - 1, item.id)
                                : deleteProduct(item.id)
                            }
                          />
                        </div>
                        <div className="flex bg-gray-900">
                          <BuyBtn
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            qty={item.qty}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {/* ) : (
              <LoaderDiv />
            )} */}
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Cart;
