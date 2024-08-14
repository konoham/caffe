import { Basket, Log } from "@phosphor-icons/react";
import React, { useState } from "react";
import { useCartSuccses, useErrorMessage, useUser } from "../../utility/Store";

import Swal from "sweetalert2";
import useAddCart from "../../feature/addToCartFunc/AddCart";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const AddToCartBtn = ({ name, price, images, country }) => {
  const { mutate, isSuccess, isError } = useAddCart();
  const email = useUser((state) => state.user?.email);

  const data = {
    name,
    price,
    images,
    email,
    country,
  };

  const addToCart = async (e) => {
    e.preventDefault();
    mutate(data, {
      onSuccess: () => {
        toast.success("success to add");
      },
      onError: () => {
        toast.error("Already on cart");
      },
    });
  };

  return (
    <>
      <button onClick={addToCart}>
        <Basket
          size={32}
          className={`rounded-full border border-primary p-1.5 text-primary`}
        />
      </button>
    </>
  );
};

export default AddToCartBtn;
