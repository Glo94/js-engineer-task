import React from 'react';
import logo from "../../assets/img/logo.png"

import { Link } from "react-router-dom";


const NoMatch = () => (
    <div className="noMatch-company">
        <div className="noMatch-company__container">
            <div className="noMatch-company__container__logo">
                <img src={logo} alt="auto1-logo"/>
            </div>
            <p className="noMatch-company__container__title">404 - Not Found</p>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>You can always go back to the <Link to={{ pathname: `./`}}>homepage</Link>.</p>
        </div>
    </div>
);

export default NoMatch