import React from "react";
import Select from "../../../../commons/Select/Select";
import Button from "../../../../commons/Button/Button";

const Filter = () => (
  <div className="filter-company">
    <Select label="Color" />
    <Select label="Manufacturer" />
    <div className="filter-company__btn">
      <Button label="Filter" />
    </div>
  </div>
);

export default Filter;
