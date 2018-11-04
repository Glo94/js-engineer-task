import React from "react";
import PropTypes from "prop-types";
import Select from "../../../../commons/Select/Select";
//import Car from "../Car/Car";
import Pagination from "../Pagination/Pagination";

//loader
import Loadable from "react-loadable";
import Loading from "../../../../utils/Loading/Car";

const AsyncCar = Loadable({
  loader: () => import("../Car/Car"),
  loading: Loading
});

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
              : 10 * (page - 1) + cars.length
          } of ${totalItem} results`}
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
        return <AsyncCar key={car.stockNumber} car={car} />;
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

Result.propTypes = {
  cars: PropTypes.array.isRequired,
  totalPageCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  valueOfSelect: PropTypes.string.isRequired,
  setStateFunction: PropTypes.func.isRequired,
  openSelect: PropTypes.object.isRequired,
  resetSelect: PropTypes.func.isRequired,
  movePage: PropTypes.func.isRequired,
  totalItem: PropTypes.number.isRequired
};

export default Result;
