import { Basket, Log } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useCartSuccses, useErrorMessage, useUser } from "../../utility/Store";
import useAddCart from "../../feature/addToCartFunc/AddCart";
import Swal from "sweetalert2";

const AddToCartBtn = ({ name, price, images, country }) => {
  const email = useUser((state) => state.user?.email);
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
    e.preventDefault();
    const create = await useAddCart(data);
    const response = await create;
    console.log(response);
    if (response.success === true) {
      Swal.fire({
        title: "Success!",
        text: "item added to card!",
        icon: "success",
      });
      setSuccess(response.success);
    }
    {
      response?.error && setMessageError(response.error);
    }
  };

  return (
    <button onClick={(e) => addToCart(data, e)}>
      <Basket
        size={32}
        className="text-primary border border-primary p-1.5 rounded-full"
      />
    </button>
  );
};

export default AddToCartBtn;
