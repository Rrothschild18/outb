import axios from "axios";

const MODE = import.meta.env.MODE;
const BASE_URL = import.meta.env.BASE_URL;

const api = axios.create({
  baseURL: MODE === "development" ? "http://localhost:3000/" : "http://34.95.223.152:3000/",
});

export default api;
export * from "./patients";
