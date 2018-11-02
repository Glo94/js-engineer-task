import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  
  render() {
    const {
      label,
      valueOfSelect,
      list,
      id,
      setStateFunction,
      openSelect,
      resetSelect
    } = this.props;
    return (
      <div className="select-company">
        <label className="select-company__label">{label}</label>
        <div className="select-company__select">
          <button
            className={`select-company__select__toggle ${
              openSelect[`select${id}`] ? "up" : ""
            }`}
            type="button"
            id={`select${id}`}
            onClick={resetSelect}
          >
            {valueOfSelect}
          </button>
          <div
            className={`select-company__select__options  ${
              openSelect[`select${id}`] ? "show" : ""
            }`}
            id={`options-${id}`}
          >
            {list.map((item, index) => {
              return (
                <button
                  onClick={setStateFunction}
                  key={index}
                  id={`item-${id}-${index}`}
                  className="select-company__select__options__item"
                  value={item}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string
};

export default Select;
