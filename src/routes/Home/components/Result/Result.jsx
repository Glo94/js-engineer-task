import React from "react";
import Select from "../../../../commons/Select/Select";
import Car from "../Car/Car";
import Pagination from "../Pagination/Pagination";

const sort = ["None", "Mileage - Ascending", "Mileage - Descending"];

const Result = ({
  cars,
  totalPageCount,
  page,
  valueOfSelect,
  setStateFunction,
  openSelect,
  resetSelect,
  movePage,
  totalItem
}) => (
  <div className="result-company">
    <div className="result-company__row">
      <div className="result-company__row__text column column--7">
        <div className="result-company__row__text__first">Available cars</div>
        <div className="result-company__row__text__second">
          {`Showing ${
            cars.length === 10
              ? cars.length * page
              : 10 * (page - 1) + totalItem
          } of ${(totalPageCount - 1) * 10 + totalItem} results`}
        </div>
      </div>
      <div className="column column--5">
        <Select
          valueOfSelect={valueOfSelect}
          list={sort}
          selectLabel="None"
          label="Sort by"
          id="Sort"
          setStateFunction={setStateFunction}
          openSelect={openSelect}
          resetSelect={resetSelect}
        />
      </div>
    </div>
    <div className="result-company__row result-company__row--car">
      {cars.map(car => {
        return <Car key={car.stockNumber} car={car} />;
      })}
    </div>
    <div className="result-company__row">
      <Pagination
        totalPageCount={totalPageCount}
        page={page}
        movePage={movePage}
      />
    </div>
  </div>
);

export default Result;
