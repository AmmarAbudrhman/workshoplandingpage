import axios from "axios";

const api = axios.create({
  baseURL: "https://ammarbawazir-002-site1.site4future.com/api",
});
api.interceptors.request.use((config) => {
  return config;
});
export default api;
