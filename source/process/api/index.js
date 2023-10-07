import axios from "axios";

const axiosInstance = axios.create({
  timeout: 30000,
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

const defaultConfig = {};

const success = (data) => data;

const fail = (error) => Promise.reject(error);

axiosInstance.interceptors.response.use(success, fail);

export const Api = {
  apiType: "API",

  configure: (callback) => callback(),

  get: (url, config = defaultConfig) => axiosInstance.get(url, config),
  post: (url, body, config = defaultConfig) =>
    axiosInstance.post(url, body, config),
  put: (url, body, config = defaultConfig) =>
    axiosInstance.put(url, body, config),
  patch: (url, body, config = defaultConfig) =>
    axiosInstance.patch(url, body, config),

  delete: (url, config = defaultConfig) => axiosInstance.delete(url, config),
};
