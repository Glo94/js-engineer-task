import { combineReducers } from "redux";
import { loadReducer } from "./loadReducer";
import { wishListReducer } from "./wishListReducer";

const RootReducer = combineReducers({
  loadReducer,
  wishListReducer
});

export default RootReducer;
