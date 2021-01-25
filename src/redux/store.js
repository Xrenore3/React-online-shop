import { combineReducers, createStore } from "redux";
import cartReducer from "./cart-reducer/cart-reducer.js";
import productsReducer from "./products-reducer/products-reducer.js";

const reducers = combineReducers(
    {
        productsData: productsReducer,
        cartData: cartReducer
    });

const store = createStore(reducers);



window.store = store;

export default store;
