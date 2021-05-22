import { React, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./_dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faInfoCircle,
    faDownload,
    faSignOutAlt,
    faCog,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

import { toggleHelp } from "../../../redux/actions/helpActions";
import { handleTipPosition } from "../../../utils/app.utils";

import exportFromJSON from "export-from-json";

const Dropdown = ({ help, jsonData, application, toggleHelp }) => {
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
        document.querySelectorAll("[data-tip]").forEach(element => {
            element.removeEventListener("mouseenter", handleTipPosition);
            element.addEventListener("mouseenter", handleTipPosition);
        });
    };

    const downloadJson = e => {
        e.preventDefault();
        let date = new Date();
        exportFromJSON({
            data: jsonData,
            fileName: `${application.name}__${
                date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
            }.${
                date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes()
            }.${
                date.getSeconds() < 10
                    ? "0" + date.getSeconds()
                    : date.getSeconds()
            }__${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${
                date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
            }-${date.getFullYear()}`,
            exportType: "json"
        });
    };

    return (
        <details className="dropdown" ref={refDropdown}>
            <summary className="dropdown__toggle" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faCog} fixedWidth />
                <FontAwesomeIcon icon={faCaretDown} fixedWidth size="sm" />
            </summary>
            <div className="dropdown__menu">
                <Link className="dropdown__item" to="/dashboard">
                    <FontAwesomeIcon icon={faLayerGroup} fixedWidth size="x1" />
                    <span>Your applications</span>
                </Link>
                <div className="dropdown__devider"></div>
                <div className="dropdown__item" onClick={e => startHelp(e)}>
                    <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="x1" />
                    <a href="#" to="/">
                        Help
                    </a>
                </div>
                <div className="dropdown__item" onClick={e => downloadJson(e)}>
                    <FontAwesomeIcon icon={faDownload} fixedWidth size="x1" />
                    <a href="#">Download JSON</a>
                </div>
                <div className="dropdown__item">
                    <FontAwesomeIcon icon={faSignOutAlt} fixedWidth size="x1" />
                    <Link to="/">Sign out</Link>
                </div>
            </div>
        </details>
    );
};

const mapSateToProps = state => ({
    help: state.help.help,
    jsonData: state.viz.jsonData,
    application: state.application.application
});

export default connect(mapSateToProps, {
    toggleHelp
})(Dropdown);
