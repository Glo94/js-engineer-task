import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./utils/serviceWorker";

//my style
import "./css/index.sass";

//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
import Header from "./commons/Header/Header";
import Footer from "./commons/Footer/Footer";

//loader
import Loadable from "react-loadable";
import Loading from "./utils/Loading";

const AsyncHome = Loadable({
  loader: () => import("./routes/Home/Home"),
  loading: Loading
});

const AsyncCarDetails = Loadable({
  loader: () => import("./routes/CarDetails/CarDetails"),
  loading: Loading
});

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/car-details/:id" component={AsyncCarDetails} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
