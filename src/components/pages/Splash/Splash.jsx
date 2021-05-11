import React from "react";
import "./_splash.scss";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../../layouts/Header";
<img className="header__img" src={logo} alt="" />;

export default function Splash() {
    return (
        <>
            <Header></Header>
            <div className="splash">
                <div className="splash__container">
                    <h2>Please choose an application to start</h2>
                    <div className="splash__app_list">
                        <div
                            className="splash__app"
                            title="Add new application"
                        >
                            <p>
                                <FontAwesomeIcon icon={faPlus} size="lg" />
                            </p>
                        </div>
                        <div className="splash__app" title="AWS">
                            <h4>Amazon Web Services</h4>
                            {/* <div className="app__details">
                                <div className="app__detail">
                                    <span>Stakeholders</span>
                                    <span>5</span>
                                </div>
                                <div className="app__detail">
                                    <span>Data</span>
                                    <span>5</span>
                                </div>
                                <div className="app__detail">
                                    <span>Process</span>
                                    <span>5</span>
                                </div>
                                <div className="app__detail">
                                    <span>Policy</span>
                                    <span>5</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="splash__app" title="Whatsapp">
                            <h4>Facebook Whatsapp</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
