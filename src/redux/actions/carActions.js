import * as types from "./actionTypes";

export function loadCars(listOfCars) {
  return { type: types.LOAD_CARS_SUCCESS, listOfCars };
}
