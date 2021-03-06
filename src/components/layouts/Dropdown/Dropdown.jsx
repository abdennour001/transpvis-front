import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./_dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
                    <Link to="/">Your applications</Link>
                </div>
                <div className="dropdown__item">
                    <Link to="/">Help</Link>
                </div>
                <div className="dropdown__item">
                    <Link to="/">Settings</Link>
                </div>
                <div className="dropdown__item">
                    <Link to="/">Sign out</Link>
                </div>
            </div>
        </details>
    );
};

export default Dropdown;
