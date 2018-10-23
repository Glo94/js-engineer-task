import React from "react";
import Select from "../../../../commons/Select/Select";
import Car from "../Car/Car";
import Pagination from "../Pagination/Pagination";

const Result = () => (
  <div className="result-company">
    <div className="row m-0">
      <div className="result-company__text col-12 col-sm-7 p-0 ">
        <div className="result-company__text__first">Available cars</div>
        <div className="result-company__text__second">
          Showing X of Y results
        </div>
      </div>
      <div className="col-12 col-sm-5 p-0">
        <Select label="Sort by" />
      </div>
    </div>
    <div className="result-company__car row m-0">
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
    </div>
    <div className="result-company__pagination row m-0">
      <Pagination />
    </div>
  </div>
);

export default Result;
