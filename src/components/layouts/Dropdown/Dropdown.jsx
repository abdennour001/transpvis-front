import { React, useEffect, useRef } from "react";
import { connect } from "react-redux";
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

import { toggleHelp } from "../../../redux/actions/helpActions";
import { handleTipPosition } from "../../../utils/app.utils";

const Dropdown = ({ help, toggleHelp }) => {
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

    const startHelp = e => {
        toggleHelp();
        document.querySelectorAll("[data-tip]").forEach((element) => {
            element.removeEventListener("mouseenter", handleTipPosition);
            element.addEventListener("mouseenter", handleTipPosition);
        });
    };

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
                <div className="dropdown__item" onClick={e => startHelp(e)}>
                    <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="md" />
                    <a href="#" to="/">
                        Help
                    </a>
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

const mapSateToProps = state => ({
    help: state.help.help
});

export default connect(mapSateToProps, {
    toggleHelp
})(Dropdown);
