 export const ProductActions = {
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
    SET_TOTAL: "SET_TOTAL",
    SET_FETCH_STATE: "SET_FETCH_STATE",
    SET_LIMIT: "SET_LIMIT",
    SET_OFFSET: "SET_OFFSET",
    SET_FILTER: "SET_FILTER"
};

const initialProductState = {
    categories: [],
    productList: [
        {
            id: 1,
            image: "/img/productCardsShop/productCardsShop1.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 2,
            image: "/img/productCardsShop/productCardsShop2.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 3,
            image: "/img/productCardsShop/productCardsShop3.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 4,
            image: "/img/productCardsShop/productCardsShop4.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 5,
            image: "/img/productCardsShop/productCardsShop5.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 6,
            image: "/img/productCardsShop/productCardsShop6.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 7,
            image: "/img/productCardsShop/productCardsShop7.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 8,
            image: "/img/productCardsShop/productCardsShop8.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 9,
            image: "/img/productCardsShop/productCardsShop9.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
             
        },
        {
            id: 10,
            image: "/img/productCardsShop/productCardsShop10.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
         },
        {
            id: 11,
            image: "/img/productCardsShop/productCardsShop11.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
         },
        {
            id: 12,
            image: "/img/productCardsShop/productCardsShop12.jpeg",
            title: "Graphic Design",
            department: "English Department",
            originalPrice: 16.48,
            discountedPrice: 6.48,
         }
    ],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED"
};

export const productReducer = (state = initialProductState, action) => {
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
        default:
            return state;
    }
};

 