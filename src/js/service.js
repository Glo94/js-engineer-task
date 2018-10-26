const colorsURL = "http://localhost:3001/colors";
const manufacturersURL = "http://localhost:3001/manufacturers";

export function getCars(cars) {
  let car = fetch(cars)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return car;
}
export function getColors(colors) {
  let color = fetch(colorsURL)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return color;
}
export function getManufacturers(manufacturers) {
  let manufacturer = fetch(manufacturersURL)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return manufacturer;
}

export function getFilter(url) {
  let filter = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return filter;
}

export function getSort(url) {
  let sort = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return sort;
}

export function getMove(url) {
  let move = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
  return move;
}
