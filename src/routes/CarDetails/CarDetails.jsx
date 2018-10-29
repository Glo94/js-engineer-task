import React, { Component } from "react";

//redux
import { connect } from "react-redux";

//actions
import {
  addCarInList,
  removeCarFromList
} from "../../redux/actions/wishListActions";

class CarDetails extends Component {
  handleClick = () => {
    const { dispatch, wishList } = this.props;
    let id = this.props.location.state.stockNumber;
    if (wishList.includes(id)) {
      dispatch(removeCarFromList(id));
    } else {
      dispatch(addCarInList(id));
    }
  };

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
        <div className="car-details-company__container">
          <div className="car-details-company__container__left column column--7">
            <div className="car-details-company__container__left__title">
              {manufacturerName + " " + modelName}
            </div>
            <div className="car-details-company__container__left__sub">
              {`Stock # ${stockNumber} - ${
                mileage.number
              } KM - ${fuelType} - ${color}`}
            </div>
            <div className="car-details-company__container__left__text">
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions
            </div>
          </div>
          <div className="car-details-company__container__right  column column--5">
            <div className="car-details-company__container__right__wishlist">
              <div className="ar-details-company__container__right__wishlist__text">
                If you like this car, click the button and save it in your
                collection of favourite items.
              </div>
              <div className="car-details-company__container__right__wishlist__btn">
                <button onClick={this.handleClick}>
                  {this.props.wishList.includes(stockNumber)
                    ? "Remove"
                    : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    wishList: state.wishListReducer
  };
};

export default connect(mapStateToProps)(CarDetails);
