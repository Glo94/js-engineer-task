import React from "react";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result/Result";

const Content = () => (
  <div className="content-company container-fluid">
    <div className="row m-0">
      <div className="col-12 col-sm-4">
        <Filter />
      </div>
      <div className="col-12 col-sm-8">
        <Result />
      </div>
    </div>
  </div>
);

export default Content;
