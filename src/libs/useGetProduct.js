import { useQuery } from "@tanstack/react-query";
import { axiosInstence } from "./axios";

export const useGetProduct = () => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/CART");
      return data;
    },
  });
};
