// import { combineReducers, legacy_createStore as createStore } from "redux";
// import { productReducer } from "./reducers/productReducer";
// import shoppingCartReducer from "./reducers/shoppingCartReducer";
// import clientReducer from "./reducers/clientReducer";





// import { combineReducers, legacy_createStore as createStore } from "redux";
// import { clientReducer } from "./reducers/clientReducer";
// import { productReducer } from "./reducers/productReducer";
// import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import logger from "redux-logger";
 
// const reducers = combineReducers({
//     client: clientReducer,
//     product: productReducer,
//     shoppingCart: shoppingCartReducer
// })

// export const store = createStore(reducers, applyMiddleware(thunk, logger));




import { combineReducers, legacy_createStore as createStore } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
 
const reducers = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    categories: categoryReducer,

})

export const store = createStore(reducers, applyMiddleware(thunk, logger));