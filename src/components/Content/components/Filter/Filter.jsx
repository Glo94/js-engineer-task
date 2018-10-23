import React from "react";
import Select from "../Select/Select";
import Button from "../Button/Button";

const Filter = () => (
  <div className="filter-company col-4 border">
    <Select label="Color" />
    <Select label="Manufacturer" />
    <div className="filter-company__btn">
      <Button label="Filter" />
    </div>
  </div>
);

export default Filter;
