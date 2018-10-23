import React from "react";

const Car = ({ label }) => (
  <div className="car-company">
    <div className="car-company__img" />
    <div className="car-company__details">
      <label>Name</label>
      <label>Description</label>
      <a href="./">View details</a>
    </div>
  </div>
);

export default Car;
