import { applyMiddleware, combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import DetailsReducer from "./reducers/detail.reducer";
import ServicioReducer from './reducers/servicio.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  details: DetailsReducer,
  servicio: ServicioReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));