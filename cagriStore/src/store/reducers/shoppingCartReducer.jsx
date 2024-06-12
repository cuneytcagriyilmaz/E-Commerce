export const ShoppingCartActions = {
    SET_CART: "SET_CART",
    SET_PAYMENT: "SET_PAYMENT",
    SET_ADDRESS: "SET_ADDRESS"
};

const initialShoppingCartState = {
    cart: [],
    payment: {},
    address: {}
};

export const shoppingCartReducer = (state = initialShoppingCartState, action) => {
    switch (action.type) {
        case ShoppingCartActions.SET_CART:
            return { ...state, cart: action.payload };
        case ShoppingCartActions.SET_PAYMENT:
            return { ...state, payment: action.payload };
        case ShoppingCartActions.SET_ADDRESS:
            return { ...state, address: action.payload };
        default:
            return state;
    }
};

 