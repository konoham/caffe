import { Minus, Plus, WarningCircle, X } from "@phosphor-icons/react";
import { useErrorMessage, useIdProduct } from "../../utility/Store";
import usePatchProduct from "../../feature/usePatchProduct";

const ModalIncreas = (props) => {
  const { setMessageError } = useErrorMessage();
  const { idProduct } = useIdProduct();

  const closeFcn = () => {
    setMessageError(false);
    setQty(1);
  };
  const data = {
    id: idProduct,
    name: props.name,
    price: props.price,
    images: props.images,
    email: props.email,
    country: props.country,
    qty: qty,
  };
  console.log(idProduct);

  console.log(qty);
  return (
    <div className="fixed left-0 right-0 top-10 z-50 flex w-full items-start justify-center">
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative h-fit rounded-lg bg-white shadow">
          <button
            type="button"
            className="items-center-600 absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <X size={24} onClick={closeFcn} />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 text-center md:p-5">
            <WarningCircle size={72} opacity={0.5} className="mx-auto" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              this coffee already in cart want to increase qty?
            </h3>
            <div className="mb-4 flex items-center justify-center gap-4 text-xl">
              <Plus
                size={32}
                className="rounded-full bg-black p-2 text-white"
                onClick={() => setQty(qty + 1)}
              />
              <h1 className="text-xl text-black">{qty}</h1>
              <Minus
                size={32}
                className="rounded-full bg-black p-2 text-white"
                onClick={() => setQty(qty >= 2 ? qty - 1 : qty)}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800"
              onClick={() => patchProduct(data)}
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
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
