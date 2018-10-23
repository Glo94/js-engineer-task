import React from "react";
import Filter from "./components/Filter/Filter";
import Result from "./components/Result/Result";

const Content = () => (
  <div className="content-company container-fluid">
    <div className="row m-0">
      <Filter />
      <Result />
    </div>
  </div>
);

export default Content;
