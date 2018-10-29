import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./utils/serviceWorker";

//my style
import "./css/index.sass";

//Router
import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

//Provider
import { Provider } from "react-redux";

//actions
import {
  loadElement,
  loadColors,
  loadManufacturers
} from "./redux/actions/loadActions";

//store
import configureStore from "./redux/store/store";

//service
import * as service from "./js/service";

const store = configureStore();

let carsList = service.getCars("http://localhost:3001/cars?page=1");
let colorsList = service.getColors("http://localhost:3001/colors");
let manufacturersList = service.getManufacturers(
  "http://localhost:3001/manufacturers"
);
Promise.all([carsList, colorsList, manufacturersList]).then(result => {
  console.log(result);
  store.dispatch(loadElement(result[0]));
  store.dispatch(loadColors(result[1].colors));
  store.dispatch(loadManufacturers(result[2].manufacturers));
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
