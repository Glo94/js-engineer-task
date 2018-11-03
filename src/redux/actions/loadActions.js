import * as types from "./actionTypes"

export function loadCars(a) {
  return { type: types.LOAD_ELEMENT_SUCCESS, a }
}

export function loadColors(b) {
  return { type: types.LOAD_COLORS_SUCCESS, b }
}

export function loadManufacturers(c) {
  return { type: types.LOAD_MANUFACTURERS_SUCCESS, c }
}

export function reciveCarDetails(d) {
  return { type: types.LOAD_CAR_SUCCESS, d }
}
