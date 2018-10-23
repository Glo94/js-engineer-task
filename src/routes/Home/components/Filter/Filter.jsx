import React, { Component } from "react";
import Select from "../../../../commons/Select/Select";
import Button from "../../../../commons/Button/Button";

class Filter extends Component {
  listSelect = cars => {
    let list = {
      colors: [],
      manufacturers: []
    };

    cars.map(item => {
      if (list.colors.includes(item.color) === false)
        list.colors.push(item.color);

      if (list.manufacturers.includes(item.manufacturers) === false)
        list.manufacturers.push(item.manufacturerName);

      return list;
    });

    return list;
  };

  render() {
    const list = this.listSelect(this.props.cars);

    return (
      <div className="filter-company">
        <Select list={list.colors} selectLabel="All car colors" label="Color" />
        <Select
          list={list.manufacturers}
          selectLabel="All manufacturers"
          label="Manufacturers"
        />
        <div className="filter-company__btn">
          <Button label="Filter" />
        </div>
      </div>
    );
  }
}

export default Filter;
