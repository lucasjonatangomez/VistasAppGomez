import { applyMiddleware, combineReducers, createStore } from "redux";

import CartReducer from './reducers/cart.reducer';
import CategoryReducer from "./reducers/category.reducer";
import DetailsReducer from "./reducers/detail.reducer";
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  details: DetailsReducer,
  cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));