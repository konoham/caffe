import axios from "axios";

export const axiosInstence = axios.create({
  baseURL: "https://cafe-backend-kappa.vercel.app/",
});
