import { ClientActions } from "../reducers/clientReducer";

export const setUser = (user) => ({
  type: ClientActions.SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: ClientActions.SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: ClientActions.SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: ClientActions.SET_LANGUAGE,
  payload: language,
});

export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", { email, password });

    if (response.status === 200) {
      const user = response.data;
      dispatch(setUser(user));

      if (rememberMe) {
        localStorage.setItem("token", user.token);
      }

      axiosInstance.defaults.headers.common["Authorization"] = user.token;

      return user;
    }
  } catch (error) {
    throw error;
  }
};
