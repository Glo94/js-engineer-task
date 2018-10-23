import React from "react";

const Select = ({ label }) => (
  <div className="select-company">
    <label className="select-company__label">{label}</label>
    <div className="select-company__select">
      <select>
        <option selected>All Cars Color</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
);

export default Select;
