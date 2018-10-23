import React from "react";
import Select from "../../../../commons/Select/Select";
import Car from "../Car/Car";
import Pagination from "../Pagination/Pagination";

const sort = ["none", "Mileage - Ascending", "Mileage - Descending"];

const Result = ({ cars, totalPageCount, page }) => (
  <div className="result-company">
    <div className="row m-0">
      <div className="result-company__text col-12 col-sm-7 p-0 ">
        <div className="result-company__text__first">Available cars</div>
        <div className="result-company__text__second">
          {`Showing ${cars.length * page} of ${totalPageCount} results`}
        </div>
      </div>
      <div className="col-12 col-sm-5 p-0">
        <Select list={sort} selectLabel="None" label="Sort by" />
      </div>
    </div>
    <div className="result-company__car row m-0">
      {cars.map(car => {
        return <Car key={car.stockNumber} car={car} />;
      })}
    </div>
    <div className="result-company__pagination row m-0">
      <Pagination
        totalPageCount={totalPageCount}
        page={page}
        length={cars.length}
      />
    </div>
  </div>
);

export default Result;
