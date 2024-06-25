import { ShoppingCartActions } from '../reducers/shoppingCartReducer';

export const addToCart = (product) => (dispatch, getState) => {
    const { cart: { cart } } = getState();  

    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

    if (existingProductIndex >= 0) {
        dispatch({
            type: ShoppingCartActions.INCREASE_QUANTITY,
            payload: product.id,
        });
    } else {
        dispatch({
            type: ShoppingCartActions.ADD_TO_CART,
            payload: { product, count: 1, checked: true },
        });
    }
};