import React from "react";
import Select from "../../../../commons/Select/Select";
import Button from "../../../../commons/Button/Button";

const Filter = ({ colors, cars, manufacturers }) => {
  const listSelect = cars => {
    let listManufacturers = [];

    manufacturers.map(item => {
      return listManufacturers.push(item.name);
    });

    return listManufacturers;
  };

  const list = listSelect(manufacturers);

  return (
    <div className="filter-company">
      <Select list={colors} selectLabel="All car colors" label="Color" />
      <Select
        list={list}
        selectLabel="All manufacturers"
        label="Manufacturers"
      />
      <div className="filter-company__btn">
        <Button label="Filter" />
      </div>
    </div>
  );
};

export default Filter;
