import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import DetailsReducer from "./reducers/detail.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  details: DetailsReducer,
});

export default createStore(RootReducer);