import { useMutation } from "@tanstack/react-query";
import { axiosInstence } from "../../libs/axios";

export const useAddCart = () => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axiosInstence.post("/CART", value);
      return data;
    },
  });
};

export default useAddCart;
