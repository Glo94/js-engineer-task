import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "../../commons/Skeleton/Skeleton";

class Loading extends Component {
  render() {
    const { isLoading, error } = this.props;
    if (isLoading) {
      return (
        <div className="carLoading-company">
          <Skeleton width={100} height={77} />
          <div className="carLoading-company__text">
            <Skeleton height={30} marginBottom={3} />
            <Skeleton height={18} marginBottom={8} />
            <Skeleton height={18} width={100} />
          </div>
        </div>
      );
    } else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    } else {
      return null;
    }
  }
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.any
};

export default Loading;
