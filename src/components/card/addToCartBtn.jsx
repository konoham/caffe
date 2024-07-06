import { Basket } from "@phosphor-icons/react";
import React from "react";
import { json } from "react-router-dom";
import { useUser } from "../../utility/Store";
import Swal from "sweetalert2";

const AddToCartBtn = ({ name, price, images, country }) => {
  const email = useUser((state) => state.user?.email);
  const data = {
    name,
    price,
    images,
    email,
    country,
  };

  const addToCart = async (data) => {
    console.log(data);

    try {
      const Post = await fetch("http://localhost:2000/CART", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await Post.json();
      if (response.success === true) {
        Swal.fire({
          title: "Success!",
          text: "item added to card!",
          icon: "success",
        });
      }
      console.log(response); // Debug: log respons dari backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={() => addToCart(data)}>
      <Basket
        size={32}
        className="text-primary border border-primary p-1.5 rounded-full"
      />
    </button>
  );
};

export default AddToCartBtn;
