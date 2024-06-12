import { ProductActions } from '../reducers/productReducer';

export const setCategories = (categories) => ({
    type: ProductActions.SET_CATEGORIES,
    payload: categories
});

export const setProductList = (productList) => ({
    type: ProductActions.SET_PRODUCT_LIST,
    payload: productList
});

export const setTotal = (total) => ({
    type: ProductActions.SET_TOTAL,
    payload: total
});

export const setFetchState = (fetchState) => ({
    type: ProductActions.SET_FETCH_STATE,
    payload: fetchState
});

export const setLimit = (limit) => ({
    type: ProductActions.SET_LIMIT,
    payload: limit
});

export const setOffset = (offset) => ({
    type: ProductActions.SET_OFFSET,
    payload: offset
});

export const setFilter = (filter) => ({
    type: ProductActions.SET_FILTER,
    payload: filter
});
