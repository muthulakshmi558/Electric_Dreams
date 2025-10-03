// src/api/axios.js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const access = localStorage.getItem("access_token");
  if (access) {
    config.headers["Authorization"] = `Bearer ${access}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response && err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      const refresh = localStorage.getItem("refresh_token");
      if (refresh) {
        try {
          const resp = await axios.post(`${baseURL}/auth/token/refresh/`, { refresh });
          const newAccess = resp.data.access;
          localStorage.setItem("access_token", newAccess);
          axios.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;
          originalConfig.headers["Authorization"] = `Bearer ${newAccess}`;
          return axiosInstance(originalConfig);
        } catch (e) {
          // refresh failed
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("user");
          window.location.href = "/login";
          return Promise.reject(e);
        }
      } else {
        // no refresh token
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
