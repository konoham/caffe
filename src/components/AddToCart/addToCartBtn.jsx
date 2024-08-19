import { Basket, Log } from "@phosphor-icons/react";
import { useUser } from "../../utility/Store";

import toast from "react-hot-toast";
import useaddToCard from "../../feature/useAddToCart";
import { useState } from "react";

const AddToCartBtn = ({ name, price, images, country }) => {
  const { mutate, isSuccess, isError } = useaddToCard();
  const [loading, setIsloading] = useState(false);
  const { user } = useUser();

  const value = {
    name,
    price,
    images,
    email: user?.email,
    country,
  };

  const handleAddToCart = async (e) => {
    setIsloading(true);
    e.preventDefault();
    if (user) {
      mutate(value);
    }
    setIsloading(false);
  };

  if (isSuccess) toast.success("success to add");
  if (isError) toast.error("Already on cart");

  return (
    <>
      <button disabled={loading} onClick={handleAddToCart}>
        <Basket
          size={32}
          className={`rounded-full border border-primary p-1.5 text-primary ${loading && "cursor-not-allowed brightness-50"}`}
        />
      </button>
    </>
  );
};

export default AddToCartBtn;
