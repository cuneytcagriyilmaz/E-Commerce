import { setUser } from "../actions/clientActions";
import { axiosInstance } from "../api/axiosInstance";

export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });

    if (response.status === 200) {
      const user = response.data;
      dispatch(setUser(user));

      if (rememberMe) {
        localStorage.setItem("token", user.token);
      }

      return user;
    }
  } catch (error) {
    throw error;
  }
};
