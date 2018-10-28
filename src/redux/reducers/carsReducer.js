import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function carReducer(state = initialState.listOfCars, action) {
  // state variable here reps just an array of courses
  switch (action.type) {
    case types.LOAD_CARS_SUCCESS:
      return Object.assign({}, state, action.listOfCars);

    default:
      return state;
  }
}
