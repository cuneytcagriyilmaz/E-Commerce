// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://workintech-fe-ecommerce.onrender.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     console.log("Request:", config);
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     console.log("Response:", response);
//     return response;
//   },
//   (error) => {
//     console.error("Response error:", error);
//     return Promise.reject(error);
//   }
// );

// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://workintech-fe-ecommerce.onrender.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     console.log("Request:", config);
//     return config;
//   },
//   (error) => {
//     console.error("Request error:", error);
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     console.log("Response:", response);
//     return response;
//   },
//   (error) => {
//     console.error("Response error:", error);
//     return Promise.reject(error);
//   }
// );

// export const fetchSavedCards = async () => {
//   try {
//     const response = await axiosInstance.get("/user/card");
//     return response.data.cards;
//   } catch (error) {
//     console.error("Error fetching saved cards:", error);
//     throw error;
//   }
// };

// export const addNewCard = async (cardData) => {
//   try {
//     const response = await axiosInstance.post("/user/card", cardData);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding new card:", error);
//     throw error;
//   }
// };

// export const updateCard = async (cardData) => {
//   try {
//     const response = await axiosInstance.put(`/user/card`, cardData);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating card:", error);
//     throw error;
//   }
// };

// export const deleteCard = async (cardId) => {
//   try {
//     const response = await axiosInstance.delete(`/user/card/${cardId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting card:", error);
//     throw error;
//   }
// };




// _______________________________________________________________________
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
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

export const fetchSavedCards = async () => {
  try {
    const response = await axiosInstance.get("/user/card");
    return response.data;
  } catch (error) {
    console.error("Error fetching saved cards:", error);
    throw error;
  }
};

export const addNewCard = async (cardData) => {
  try {
    const response = await axiosInstance.post("/user/card", cardData);
    return response.data;
  } catch (error) {
    console.error("Error adding new card:", error);
    throw error;
  }
};

export const updateCard = async (cardData) => {
  try {
    const response = await axiosInstance.put(`/user/card`, cardData);  
    return response.data;
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};

export const deleteCard = async (cardId) => {
  try {
    const response = await axiosInstance.delete(`/user/card/${cardId}`);  
    return response.data;
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};
