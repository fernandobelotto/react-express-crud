import { createStandaloneToast } from "@chakra-ui/react";
import Axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "../store";

export default function getInstance(): AxiosInstance {
  const state = store.getState();
  const toast = createStandaloneToast();

  const { accessToken } = state.session;

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      Accept: "*/*",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      toast({
        title: "Request Error",
        description: `Message: ${error.message}`,
        status: "error",
        duration: 3000,
      });
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export function handleSessionError(err: AxiosError | unknown): boolean {
  const toast = createStandaloneToast();

  if ((err as AxiosError)?.response?.status === 401) {
    toast({
      title: "Session Expired",
      description: "Your session is expired, please sign in again",
      status: "error",
      duration: 3000,
    });

    return true;
  }
  return false;
}
