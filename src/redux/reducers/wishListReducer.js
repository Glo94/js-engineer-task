import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function wishListReducer(state = initialState.wishList, action) {
  switch (action.type) {
    case types.ADD_CAR_WISHLIST_SUCCESS:
      return [...state, action.a];
    case types.REMOVE_CAR_WISHLIST_SUCCESS:
      return state.filter(item => item !== action.b);
    default:
      return state;
  }
}
