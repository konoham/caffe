import React, { useEffect } from "react";

const BuyBtn = (props) => {
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

  const data = {
    id: props.id,
    name: props.name,
    price: props.price,
    qty: props.qty,
  };

  const buy = async () => {
    try {
      const req = await fetch("http://localhost:2000/CART/BUY", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      window.snap.pay(res.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="font-medium text-white px-5 py-2 rounded-lg bg-primary hover:text-indigo-500"
      onClick={buy}
    >
      Buy
    </button>
  );
};

export default BuyBtn;
