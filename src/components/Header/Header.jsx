import React from "react";
import logo from "../../assets/img/logo-exemple.png";

const Header = () => (
  <nav className="header-company navbar navbar-light border-bottom">
    <div className="col-6 p-0">
      <a className="navbar-brand" href="./">
        <img className="header-company__logo" src={logo} alt="" />
      </a>
    </div>
    <div className="header-company__anchors col-6 p-0">
      <a className="header-company__anchors__item" href="./">
        Purchase
      </a>
      <a className="header-company__anchors__item" href="./">
        My Orders
      </a>
      <a className="header-company__anchors__item" href="./">
        Sell
      </a>
    </div>
  </nav>
);

export default Header;
