import Axios, { AxiosInstance } from "axios";

export default function getInstance(): AxiosInstance {

  return Axios.create({
    baseURL: "http://localhost:4000/",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
}