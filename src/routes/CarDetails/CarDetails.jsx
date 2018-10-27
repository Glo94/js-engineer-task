import React, { Component } from "react";

class CarDetails extends Component {
  render() {
    const {
      pictureUrl,
      manufacturerName,
      modelName,
      fuelType,
      mileage,
      stockNumber,
      color
    } = this.props.location.state;

    return (
      <div className="car-details-company">
        <div className="car-details-company__img">
          <img src={pictureUrl} alt="" />
        </div>
        <div className="car-details-company__left">
          <div>{manufacturerName + " " + modelName}</div>
          <div>
            {`Stock # ${stockNumber} - ${
              mileage.number
            } KM - ${fuelType} - ${color}`}
          </div>
          <div className="car-details-company__left__text">
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather conditions
          </div>
        </div>
        <div className="car-details-company__right">
          <div className="ar-details-company__right__text">
            If you like this car, click the button and save it in your
            collection of favourite items.
          </div>
          <button className="ar-details-company__right__btn">Save</button>
        </div>
      </div>
    );
  }
}

export default CarDetails;
