import React from "react";
import { Link } from "react-router-dom";

const Car = ({ label }) => (
  <div className="car-company">
    <div className="car-company__img" />
    <div className="car-company__details">
      <label>Name</label>
      <label>Description</label>
      <Link to="/car-details">View details</Link>
    </div>
  </div>
);

export default Car;
