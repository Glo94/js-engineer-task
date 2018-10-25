import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo-exemple.png";

const Header = () => (
  <nav className="header-company">
    <div className="header-company__content">
      <Link className="navbar-brand" to="/">
        <img className="header-company__content__logo" src={logo} alt="" />
      </Link>
    </div>
    <div className="header-company__anchors">
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
