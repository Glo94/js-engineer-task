import React from "react";
import Select from "../../../../commons/Select/Select";
import Car from "../Car/Car";
import Pagination from "../Pagination/Pagination";

const sort = ["none", "Mileage - Ascending", "Mileage - Descending"];

const Result = ({ cars, totalPageCount, page }) => (
  <div className="result-company">
    <div className="result-company__row">
      <div className="result-company__row__text column column--7">
        <div className="result-company__row__text__first">Available cars</div>
        <div className="result-company__row__text__second">
          {`Showing ${cars.length * page} of ${totalPageCount} results`}
        </div>
      </div>
      <div className="column column--5">
        <Select list={sort} selectLabel="None" label="Sort by" />
      </div>
    </div>
    <div className="result-company__row">
      <div className="result-company__row__car">
        {cars.map(car => {
          return <Car key={car.stockNumber} car={car} />;
        })}
      </div>
    </div>
    <div className="result-company__row">
      <div className="result-company__row__pagination">
        <Pagination
          totalPageCount={totalPageCount}
          page={page}
          length={cars.length}
        />
      </div>
    </div>
  </div>
);

export default Result;
