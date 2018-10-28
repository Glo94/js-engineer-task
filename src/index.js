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
import { loadCars } from "./redux/actions/carActions";

//store
import configureStore from "./redux/store/store";

//service
import * as service from "./js/service";

const store = configureStore();

let carsList = service.getCars("http://localhost:3001/cars?page=1");
Promise.resolve(carsList).then(result => {
  store.dispatch(loadCars(result));
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
