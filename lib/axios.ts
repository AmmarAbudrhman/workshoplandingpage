import axios from "axios";

const api = axios.create({
  baseURL: "https://nooor.tech/api",
});
api.interceptors.request.use((config) => {
  return config;
});
export default api;
