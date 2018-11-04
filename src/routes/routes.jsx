import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import Header from "../commons/Header/Header";
import Footer from "../commons/Footer/Footer";
import NoMatch from "../routes/NoMatch/NoMatch";

//loader
import Loadable from "react-loadable";
import Loading from "../utils/Loading";

const AsyncHome = Loadable({
  loader: () => import("./Home/Home"),
  loading: Loading
});

const AsyncCarDetails = Loadable({
  loader: () => import("./CarDetails/CarDetails"),
  loading: Loading
});

export default (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/car-details/:id" component={AsyncCarDetails} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </div>
);
