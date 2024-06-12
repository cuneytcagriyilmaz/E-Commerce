import { ClientActions } from '../reducers/clientReducer';



export const setUser = (user) => ({
    type: ClientActions.SET_USER,
    payload: user
});

export const setRoles = (roles) => ({
    type: ClientActions.SET_ROLES,
    payload: roles
});

export const setTheme = (theme) => ({
    type: ClientActions.SET_THEME,
    payload: theme
});

export const setLanguage = (language) => ({
    type: ClientActions.SET_LANGUAGE,
    payload: language
});
