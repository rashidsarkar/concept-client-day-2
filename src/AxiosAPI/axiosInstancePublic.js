import axios from "axios";

const axiosInstancePublic = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export default axiosInstancePublic;
