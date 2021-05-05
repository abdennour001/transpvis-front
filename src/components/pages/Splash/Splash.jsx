import React from "react";
import "./_splash.scss";
import logo from "../../../assets/logo.png";

export default function Splash() {
    return (
        <>
            <div className="splash">
                <div className="splash__logo_container">
                    <img className="splash__logo" src={logo} alt="" />
                    <h2 className="splash__title">Transpvis</h2>
                    <p className="splash__subtitle">
                        Transparency Visual Analysis
                    </p>
                </div>
                <div className="splash__container">
                    <h2>Please choose an application to start 🚀</h2>
                    <div className="splash__app_list">
                        <div className="splash__app">
                                <p>Amazon Web Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
