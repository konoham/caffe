import { Basket, Log } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useCartSuccses, useErrorMessage, useUser } from "../../utility/Store";

import Swal from "sweetalert2";
import useAddCart from "../../feature/addToCartFunc/AddCart";
import Loader from "../Loader/Loader";

const AddToCartBtn = ({ name, price, images, country }) => {
  const email = useUser((state) => state.user?.email);
  const [isLoading, setIsLoading] = useState();
  const setSuccess = useCartSuccses((state) => state.setSuccess);
  const setMessageError = useErrorMessage((state) => state.setMessageError);

  const data = {
    name,
    price,
    images,
    email,
    country,
  };

  const addToCart = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();
    const create = await useAddCart(data);
    const response = await create;
    if (response.success === true) {
      Swal.fire({
        title: "Success!",
        text: "item added to card!",
        icon: "success",
      });
      setSuccess(response.success);
      setIsLoading(false);
    }
    {
      response?.error && setMessageError(response.data);
      setTimeout(() => {
        setMessageError(null);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <>
      {!isLoading ? (
        <button onClick={(e) => addToCart(data, e)}>
          <Basket
            size={32}
            className={`text-primary border border-primary p-1.5 rounded-full ${isLoading ? "bg-slate-200 pointer-events-none" : ""}`}
          />
        </button>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AddToCartBtn;
