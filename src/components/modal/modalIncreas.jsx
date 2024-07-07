import { Minus, Plus, WarningCircle, X } from "@phosphor-icons/react";
import { useCartSuccses, useErrorMessage, useqty } from "../../utility/Store";

const ModalIncreas = () => {
  const qty = useqty((state) => state.qty);
  const setQty = useqty((state) => state.setQty);
  const setMessageError = useErrorMessage((state) => state.setMessageError);

  const closeFcn = () => {
    setMessageError(false);
    setQty(1);
  };

  console.log(qty);
  return (
    <div className=" overflow-y-auto overflow-x-hidden fixed top-1/2 left-0 right-0 flex justify-center items-start z-50 w-full ">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow h-fit">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center-600"
          >
            <X size={24} onClick={closeFcn} />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <WarningCircle size={72} opacity={0.5} className="mx-auto" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              this coffee already in cart want to increase qty?
            </h3>
            <div className="flex justify-center items-center gap-4 text-xl mb-4">
              <Plus
                size={32}
                className="rounded-full p-2 bg-black text-white"
                onClick={() => setQty(qty + 1)}
              />
              <h1>{qty}</h1>
              <Minus
                size={32}
                className="rounded-full p-2 bg-black text-white"
                onClick={() => setQty(qty >= 2 ? qty - 1 : qty)}
              />
            </div>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              onClick={() => setMessageError(false)}
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
              onClick={closeFcn}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIncreas;
