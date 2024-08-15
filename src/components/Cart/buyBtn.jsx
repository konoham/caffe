import React, { useEffect } from "react";
import useBuyProduct from "../../feature/useBuyProduct";
import { useUser } from "../../utility/Store";

const BuyBtn = (props) => {
  const { mutate, data } = useBuyProduct();

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const value = {
    id: props.id,
    name: props.name,
    price: props.price,
    qty: props.qty,
  };

  const buy = async () => {
    try {
      mutate(value);
      if (data) {
        window.snap.pay(data?.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="rounded-lg bg-primary px-5 py-2 font-medium text-white hover:text-indigo-500"
      onClick={buy}
    >
      Buy
    </button>
  );
};

export default BuyBtn;
