import axios from "axios";

const MODE = import.meta.env.MODE;

const api = axios.create({
  baseURL: MODE === "development" ? "http://localhost:3000/" : "https://outb-jsonserver.vercel.app/",
});

export default api;
export * from "./patients";
export * from "./outcomes";
export * from "./algorithms";
