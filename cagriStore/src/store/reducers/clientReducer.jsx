

export const ClientActions = {
    SET_USER: "SET_USER",
    SET_ROLES: "SET_ROLES",
    SET_THEME: "SET_THEME",
    SET_LANGUAGE: "SET_LANGUAGE"

};


const initialClientState = {
    user: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "en"
};

export const clientReducer = (state = initialClientState, action) => {
    switch (action.type) {
        case ClientActions.SET_USER:
            return { ...state, user: action.payload };
        case ClientActions.SET_ROLES:
            return { ...state, roles: action.payload };
        case ClientActions.SET_THEME:
            return { ...state, theme: action.payload };
        case ClientActions.SET_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
};


