import React from "react";

const Button = ({ label, handleClick }) => (
  <button onClick={handleClick} className="btn-company btn">
    {label}
  </button>
);

export default Button;
