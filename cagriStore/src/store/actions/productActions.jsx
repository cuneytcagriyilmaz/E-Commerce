import { ProductActions } from '../reducers/productReducer';
import { axiosInstance } from '../api/axiosInstance';

// export const fetchProducts = () => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get('/products');

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });

//     }
// };


// export const fetchProductsByCategoryId = (categoryId) => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get(`/products?category=${categoryId}`);

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });

//     }
// };

// ------------------------------------------------------

// export const fetchProducts = (sortOption = 'price:asc') => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get(`/products?sort=${sortOption}`);

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
//     }
// };

// export const fetchProductsByCategoryId = (categoryId, sortOption = 'price:asc') => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get(`/products?category=${categoryId}&sort=${sortOption}`);

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
//     }
// };



// export const fetchProducts = (sortOption = 'price:asc', filterText = '') => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get(`/products?sort=${sortOption}&filter=${filterText}`);

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
//     }
// };

// export const fetchProductsByCategoryId = (categoryId, sortOption = 'price:asc', filterText = '') => async (dispatch) => {
//     try {
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
//         const response = await axiosInstance.get(`/products?category=${categoryId}&sort=${sortOption}&filter=${filterText}`);

//         const { total, products } = response.data;

//         dispatch({ type: ProductActions.SET_TOTAL, payload: total });
//         dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
//     }
// };


export const fetchProducts = (sortOption = 'price:asc', filterText = '') => async (dispatch) => {
    try {
        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
        const response = await axiosInstance.get(`/products?sort=${sortOption}&filter=${filterText}`);

        const { total, products } = response.data;

        dispatch({ type: ProductActions.SET_TOTAL, payload: total });
        dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
    }
};

export const fetchProductsByCategoryId = (categoryId, sortOption = 'price:asc', filterText = '') => async (dispatch) => {
    try {
        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHING" });
        const response = await axiosInstance.get(`/products?category=${categoryId}&sort=${sortOption}&filter=${filterText}`);

        const { total, products } = response.data;

        dispatch({ type: ProductActions.SET_TOTAL, payload: total });
        dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCHED" });
    } catch (error) {
        console.error('Error fetching products:', error);
        dispatch({ type: ProductActions.SET_FETCH_STATE, payload: "FETCH_ERROR" });
    }
};
export const fetchProductById = (productId) => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products/${productId}`);
        const productDetail = response.data;

        dispatch({ type: ProductActions.SET_PRODUCT_DETAIL, payload: productDetail });

    } catch (error) {
        console.error('Error fetching product:', error);
    }
};

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

