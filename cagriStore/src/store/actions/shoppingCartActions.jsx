import { ShoppingCartActions } from '../reducers/shoppingCartReducer';

export const setCart = (cartItems) => ({
    type: ShoppingCartActions.SET_CART,
    payload: cartItems
});

export const setPayment = (paymentInfo) => ({
    type: ShoppingCartActions.SET_PAYMENT,
    payload: paymentInfo
});

export const setAddress = (addressInfo) => ({
    type: ShoppingCartActions.SET_ADDRESS,
    payload: addressInfo
});
