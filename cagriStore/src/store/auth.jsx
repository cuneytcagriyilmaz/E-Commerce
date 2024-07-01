// src/store/auth.js
import { setUser } from "../store/actions/clientActions";
import { axiosInstance } from "../store/api/axiosInstance";

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = token;

    try {
      const response = await axiosInstance.get("/verify");

      if (response.status === 200) {
        const user = response.data;
        dispatch(setUser(user));
        localStorage.setItem("token", user.token);
        axiosInstance.defaults.headers.common["Authorization"] = user.token;
      } else {
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
      }
    } catch (error) {
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
      console.error("Token verification failed:", error);
    }
  }
};
