import React from "react";
import { Link } from "react-router-dom";

import "./_header.scss";
import logo from "../../../assets/logo.png";
import Dropdown from "../Dropdown";

const Header = () => {
    return (
        <>
            <header className="header">
                <Link className="header__logo" to="/">
                    <img className="header__img" src={logo} alt="" />
                    <h3 className="header__title">Transpvis</h3>
                    <span style={{ marginLeft: "4px", marginBottom: "2px" }}>
                        <small>v1.0</small>
                    </span>
                </Link>
                <Dropdown />
            </header>
        </>
    );
};

export default Header;
