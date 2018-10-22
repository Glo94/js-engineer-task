import React, { Component } from "react";
import logo from "../../assets/img/logo.png";

const Header = () => (
  <nav className="navbar navbar-light border-bottom">
    <div className="col-6">
      <a className="navbar-brand" href="./">
        <img src={logo} alt="" />
      </a>
    </div>
    <div className="col-6">
      <a href="./">Purchase</a>
      <a href="./">My Orders</a>
      <a href="./">Sell</a>
    </div>
  </nav>
);

export default Header;
