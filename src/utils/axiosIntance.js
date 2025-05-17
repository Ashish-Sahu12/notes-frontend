// axiosInstance.js
import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Example: http://localhost:9000
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization token if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
