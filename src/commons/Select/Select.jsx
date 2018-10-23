import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  render() {
    const { label, list } = this.props;
    return (
      <div className="select-company">
        <label className="select-company__label">{label}</label>
        <div className="select-company__select">
          <select>
            {list.map((item, index) => {
              return (
                <option key={index} val={item}>
                  {item}
                </option>
              );
            })}
          </select>
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
