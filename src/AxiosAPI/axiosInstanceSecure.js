import axios from "axios";

const axiosInstanceSecure = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
});

export default axiosInstanceSecure;
