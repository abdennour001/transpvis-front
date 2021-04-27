import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./_dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faInfoCircle,
    faCog,
    faSignOutAlt,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
    const refDropdown = useRef(null);

    const toggleDropdown = event => {
        if (refDropdown.current?.open) {
            if (event !== undefined) {
                event.preventDefault();
            }
            refDropdown.current.open = false;
        }
    };

    useEffect(() => {
        document.addEventListener("click", () => {
            toggleDropdown();
        });
    }, []);

    return (
        <details className="dropdown" ref={refDropdown}>
            <summary className="dropdown__toggle" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faCog} fixedWidth />
                <FontAwesomeIcon icon={faCaretDown} fixedWidth size="sm" />
            </summary>
            <div className="dropdown__menu">
                <div className="dropdown__item">
                    <FontAwesomeIcon icon={faLayerGroup} fixedWidth size="md" />
                    <Link to="/">Your applications</Link>
                </div>
                <div className="dropdown__devider"></div>
                <div className="dropdown__item">
                    <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="md" />
                    <Link to="/">Help</Link>
                </div>
                <div className="dropdown__item">
                    <FontAwesomeIcon icon={faCog} fixedWidth size="md" />
                    <Link to="/">Settings</Link>
                </div>
                <div className="dropdown__item">
                    <FontAwesomeIcon icon={faSignOutAlt} fixedWidth size="md" />
                    <Link to="/">Sign out</Link>
                </div>
            </div>
        </details>
    );
};

export default Dropdown;
