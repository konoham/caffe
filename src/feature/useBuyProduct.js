import { useMutation } from "@tanstack/react-query";
import { axiosInstence } from "../libs/axios";

const useBuyProduct = () => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axiosInstence.post("/CART/BUY", value);
      return data;
    },
  });
};
export default useBuyProduct;
