import { Basket, Log } from "@phosphor-icons/react";
import { useUser } from "../../utility/Store";

import toast from "react-hot-toast";
import useaddToCard from "../../feature/useAddToCart";

const AddToCartBtn = ({ name, price, images, country }) => {
  const { mutate, isSuccess, isError } = useaddToCard();
  const email = useUser((state) => state.user?.email);

  const value = {
    name,
    price,
    images,
    email,
    country,
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    mutate(value);
  };

  if (isSuccess) toast.success("success to add");
  if (isError) toast.error("Already on cart");

  return (
    <>
      <button onClick={handleAddToCart}>
        <Basket
          size={32}
          className={`rounded-full border border-primary p-1.5 text-primary`}
        />
      </button>
    </>
  );
};

export default AddToCartBtn;
