import * as types from "./actionTypes";

export function loadElement(a) {
  return { type: types.LOAD_ELEMENT_SUCCESS, a };
}

export function loadColors(b) {
  return { type: types.LOAD_COLORS_SUCCESS, b };
}

export function loadManufacturers(c) {
  return { type: types.LOAD_MANUFACTURERS_SUCCESS, c };
}
