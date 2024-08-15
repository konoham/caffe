import { useQuery } from "@tanstack/react-query";
import { axiosInstence } from "../libs/axios";

const useGetProduct = (succsesDelete, succsesqty, email, open) => {
  return useQuery({
    queryKey: [succsesDelete, succsesqty, open],
    queryFn: async () => {
      const { data } = await axiosInstence.get("/CART/" + email);
      return data;
    },
  });
};
export default useGetProduct;
