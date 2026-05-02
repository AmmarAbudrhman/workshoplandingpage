import axios from "axios";

const api = axios.create({
  baseURL: "https://ratil.tryasp.net/api",
});
api.interceptors.request.use((config) => {
  return config;
});
export default api;
