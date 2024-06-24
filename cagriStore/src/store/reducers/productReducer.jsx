// export const ProductActions = {
//     SET_CATEGORIES: "SET_CATEGORIES",
//     SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
//     SET_TOTAL: "SET_TOTAL",
//     SET_FETCH_STATE: "SET_FETCH_STATE",
//     SET_LIMIT: "SET_LIMIT",
//     SET_OFFSET: "SET_OFFSET",
//     SET_FILTER: "SET_FILTER"
// };


// const initialProductState = {
//     categories: [],
//     productList: [],
//     total: 0,
//     limit: 25,
//     offset: 0,
//     filter: "",
//     fetchState: "NOT_FETCHED"
// };

// export const productReducer = (state = initialProductState, action) => {
//     switch (action.type) {
//         case ProductActions.SET_CATEGORIES:
//             return { ...state, categories: action.payload };
//         case ProductActions.SET_PRODUCT_LIST:
//             return { ...state, productList: action.payload };
//         case ProductActions.SET_TOTAL:
//             return { ...state, total: action.payload };
//         case ProductActions.SET_FETCH_STATE:
//             return { ...state, fetchState: action.payload };
//         case ProductActions.SET_LIMIT:
//             return { ...state, limit: action.payload };
//         case ProductActions.SET_OFFSET:
//             return { ...state, offset: action.payload };
//         case ProductActions.SET_FILTER:
//             return { ...state, filter: action.payload };
//         default:
//             return state;
//     }

// };




 

export const ProductActions = {
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
    SET_TOTAL: "SET_TOTAL",
    SET_FETCH_STATE: "SET_FETCH_STATE",
    SET_LIMIT: "SET_LIMIT",
    SET_OFFSET: "SET_OFFSET",
    SET_FILTER: "SET_FILTER",
    SET_PRODUCT_DETAIL: "SET_PRODUCT_DETAIL"

};


const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    productDetail: null,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActions.SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case ProductActions.SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case ProductActions.SET_TOTAL:
            return { ...state, total: action.payload };
        case ProductActions.SET_FETCH_STATE:
            return { ...state, fetchState: action.payload };
        case ProductActions.SET_LIMIT:
            return { ...state, limit: action.payload };
        case ProductActions.SET_OFFSET:
            return { ...state, offset: action.payload };
        case ProductActions.SET_FILTER:
            return { ...state, filter: action.payload };
        case ProductActions.SET_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload };
        default:
            return state;
    }
};

 
