// import axios from 'axios';

// export const axiosInstance = axios.create({
//     baseURL: 'https://workintech-fe-ecommerce.onrender.com'
// });

// axiosInstance.interceptors.request.use((config) => {
//     console.log('Request:', config);
//     return config;
// }, (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
// });

// axiosInstance.interceptors.response.use((response) => {
//     console.log('Response:', response);
//     return response;
// }, (error) => {
//     console.error('Response error:', error);
//     return Promise.reject(error);
// });

// src/api/axiosInstance.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
