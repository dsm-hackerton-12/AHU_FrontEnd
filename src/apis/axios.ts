import axios from "axios";
import { useUserStore } from "../stores/useUserStore";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = useUserStore.getState().accessToken;
    if (accessToken && config.url !== "/api/oauth2/test/config") {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => {
    alert("오류가 발생했습니다");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
