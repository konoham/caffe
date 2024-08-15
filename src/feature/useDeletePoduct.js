import { useMutation } from "@tanstack/react-query";
import { axiosInstence } from "../libs/axios";

const useDeleteProduct = () => {
  return useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosInstence.delete("/CART/" + id);
      return data;
    },
  });
};
export default useDeleteProduct;
