export function getCars(cars) {
  let car = fetch(cars)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return car;
}
export function getColors(colorsURL) {
  let color = fetch(colorsURL)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return color;
}
export function getManufacturers(manufacturersURL) {
  let manufacturer = fetch(manufacturersURL)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return manufacturer;
}

export function getFilter(url) {
  let filter = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return filter;
}

export function getSort(url) {
  let sort = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return sort;
}

export function getMove(url) {
  let move = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return move;
}

export function getCarStockNumber(url) {
  let car = fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => err);
  return car;
}
