import React from "react";
import Select from "../../../../commons/Select/Select";
import Car from "../Car/Car";

const Result = () => (
  <div className="result-company col-8">
    <div className="row m-0">
      <div className="result-company__text col-7 p-0 ">
        <div className="result-company__text__first">Available cars</div>
        <div className="result-company__text__second">
          Showing X of Y results
        </div>
      </div>
      <div className="col-5 p-0">
        <Select label="Sort by" />
      </div>
    </div>
    <div className="row m-0">
      <Car />
    </div>
  </div>
);

export default Result;
