import { combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer/products-reducer.js";

const reducers = combineReducers({ productsData: productsReducer });

const store = createStore(reducers);

window.store = store;

export default store;
