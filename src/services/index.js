import axios from "axios";

const MODE = import.meta.env.MODE;
const BASE_URL = import.meta.env.BASE_URL;

const api = axios.create({
  baseURL: MODE === "development" ? "http://34.66.72.119:3000/" : "https://outb-jsonserver.vercel.app/",
});

export default api;
export * from "./patients";
