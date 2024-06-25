export const ShoppingCartActions = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY'
};

const initialState = {
    cart: [],
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShoppingCartActions.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case ShoppingCartActions.INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload
                        ? { ...item, count: item.count + 1 }
                        : item
                ),
            };
        case ShoppingCartActions.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload),
            };
        case ShoppingCartActions.DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload && item.count > 1
                        ? { ...item, count: item.count - 1 }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;