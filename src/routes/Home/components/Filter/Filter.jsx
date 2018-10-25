import React from "react";
import Select from "../../../../commons/Select/Select";
import Button from "../../../../commons/Button/Button";

const Filter = ({
  colors,
  cars,
  manufacturers,
  setStateFunction,
  valueOfSelect,
  selectIsOpen,
  openSelect,
  resetSelect,
  handleClickFilter
}) => {
  const listSelect = cars => {
    let listManufacturers = ["All manufacturers"];

    manufacturers.map(item => {
      return listManufacturers.push(item.name);
    });

    return listManufacturers;
  };
  const list = listSelect(manufacturers);
  return (
    <div className="filter-company">
      <Select
        list={colors}
        selectLabel="All car colors"
        label="Color"
        id="Colors"
        setStateFunction={setStateFunction}
        valueOfSelect={valueOfSelect.colors}
        openSelect={openSelect}
        resetSelect={resetSelect}
      />
      <Select
        list={list}
        selectLabel="All manufacturers"
        label="Manufacturers"
        id="Manufacturers"
        setStateFunction={setStateFunction}
        valueOfSelect={valueOfSelect.manufacturers}
        openSelect={openSelect}
        resetSelect={resetSelect}
      />
      <div className="filter-company__btn">
        <Button handleClick={handleClickFilter} label="Filter" />
      </div>
    </div>
  );
};

export default Filter;
