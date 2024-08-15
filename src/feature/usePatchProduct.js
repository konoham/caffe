import { useMutation } from "@tanstack/react-query";
import { axiosInstence } from "../libs/axios";

const usePatchQty = (id) => {
  return useMutation({
    mutationFn: async (value) => {
      const { data } = await axiosInstence.patch("/CART/" + value.id, value);
      return data;
    },
  });
};
export default usePatchQty;
