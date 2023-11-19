import axios from "axios";

const axiosInstancePublic = axios.create({
  baseURL: "http://localhost:8000",
});

export default axiosInstancePublic;
