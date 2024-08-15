import { useMutation } from "@tanstack/react-query";
import { axiosInstence } from "../libs/axios";

const useaddToCard = () => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axiosInstence.post("/CART", value);
      return data;
    },
  });
};
export default useaddToCard;
