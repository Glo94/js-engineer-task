import { combineReducers } from "redux";
import listOfCars from "./carsReducer";

const RootReducer = combineReducers({
  listOfCars
});

export default RootReducer;
