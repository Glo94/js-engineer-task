import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

//service
import { getCarStockNumber } from "../../js/service";

//redux
import { connect } from "react-redux";

//actions
import {
  addCarInList,
  removeCarFromList
} from "../../redux/actions/wishListActions";

import { reciveCarDetails } from "../../redux/actions/loadActions";

import NoMatch from "../NoMatch/NoMatch";

class CarDetails extends Component {
  state = {
    error: false
  };

  handleClick = () => {
    const { dispatch, wishList, car } = this.props;
    let id = car.stockNumber;
    if (wishList.includes(id)) {
      dispatch(removeCarFromList(id));
      NotificationManager.error(
        `This car (Stock #${id}) has been deleted from your collection!`,
        "Removed",
        3000
      );
    } else {
      dispatch(addCarInList(id));
      NotificationManager.success(
        `This car (Stock #${id}) has been saved in your collection!`,
        "Saved",
        3000
      );
    }
  };

  componentDidMount = () => {
    const { car, match } = this.props;
    if (car !== "undefined") {
      let cod = match.params.id;
      const { dispatch } = this.props;
      let car = getCarStockNumber("http://localhost:3001/cars/" + cod);
      Promise.resolve(car)
        .then(result => {
          dispatch(reciveCarDetails(result.car));
        })
        .catch(() =>
          this.setState({
            error: true
          })
        );
    }
  };

  render() {
    const { car } = this.props;
    return (
      <React.Fragment>
        {this.state.error ? (
          <NoMatch />
        ) : (
          <div className="car-details-company">
            <div className="car-details-company__img">
              <img src={car.pictureUrl} alt="" />
            </div>
            <div className="car-details-company__container">
              <div className="car-details-company__container__left column column--7">
                <div className="car-details-company__container__left__title">
                  {car.manufacturerName + " " + car.modelName}
                </div>
                <div className="car-details-company__container__left__sub">
                  {`Stock # ${car.stockNumber} - ${car.mileage.number} KM - ${
                    car.fuelType
                  } - ${car.color}`}
                </div>
                <div className="car-details-company__container__left__text">
                  This car is currently available and can be delivered as soon
                  as tomorrow morning. Please be aware that delivery times shown
                  in this page are not definitive and may change due to bad
                  weather conditions
                </div>
              </div>
              <div className="car-details-company__container__right  column column--5">
                <div className="car-details-company__container__right__wishlist">
                  <div className="ar-details-company__container__right__wishlist__text">
                    {this.props.wishList.includes(car.stockNumber)
                      ? "This car is in your collection. Click the button and remove it!"
                      : "If you like this car, click the button and save it in your collection of favourite items."}
                  </div>
                  <div className="car-details-company__container__right__wishlist__btn">
                    <button onClick={this.handleClick}>
                      {this.props.wishList.includes(car.stockNumber)
                        ? "Remove"
                        : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <NotificationContainer />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishList: state.wishListReducer,
    car: state.loadReducer.car
  };
};

CarDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  car: PropTypes.array.isRequired,
  wishList: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CarDetails);
