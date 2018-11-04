import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function loadReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ELEMENT_SUCCESS:
      return { ...state, listOfCars: action.a };
    case types.LOAD_COLORS_SUCCESS:
      return { ...state, colors: [...state.colors, ...action.b] };
    case types.LOAD_MANUFACTURERS_SUCCESS:
      return { ...state, manufacturers: action.c };

    case types.LOAD_CAR_SUCCESS:
      return {...state, car: action.d};

    default:
      return state;
  }
}
