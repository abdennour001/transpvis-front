import React from "react";
import { Link } from "react-router-dom";

import "./_header.scss";
import logo from "../../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
                <div className="header__settings">
                    <FontAwesomeIcon icon={faCog} fixedWidth />
                    <FontAwesomeIcon icon={faCaretDown} fixedWidth size="sm" />
                </div>
            </header>
        </>
    );
};

export default Header;
