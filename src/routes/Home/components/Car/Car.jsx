import React from "react";
import { Link } from "react-router-dom";

const Car = ({ label, car }) => (
  <div className="car-company">
    <div className="car-company__img">
      <img alt={car.modelName} src={car.pictureUrl} />
    </div>
    <div className="car-company__details">
      <label>{`${car.manufacturerName} ${car.modelName}`}</label>
      <label>{`Stock # ${car.stockNumber} - ${car.mileage.number} KM - ${
        car.fuelType
      } - ${car.color}`}</label>
      <Link to={`/car-details/${car.stockNumber}`}>View details</Link>
    </div>
  </div>
);

export default Car;
