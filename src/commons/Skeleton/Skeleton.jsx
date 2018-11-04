import React from "react";
import PropTypes from "prop-types";

const getCssVal = n => (isNaN(n) ? n : `${n}px`);

const Skeleton = ({ width, height, marginBottom }) => (
  <div
    className="skeleton-company"
    style={Object.assign(
      { width: getCssVal(width) },
      height && { height: getCssVal(height) },
      marginBottom && { marginBottom: getCssVal(marginBottom) }
    )}
  />
);

const cssValPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);

Skeleton.propTypes = {
  width: cssValPropType,
  height: cssValPropType,
  marginBottom: cssValPropType
};

Skeleton.defaultProps = {
  width: "100%",
  height: null,
  marginBottom: 0
};

export default Skeleton;
