import * as types from "./actionTypes";

export function addCarInList(a) {
  return { type: types.ADD_CAR_WISHLIST_SUCCESS, a };
}

export function removeCarFromList(b) {
  return { type: types.REMOVE_CAR_WISHLIST_SUCCESS, b };
}
