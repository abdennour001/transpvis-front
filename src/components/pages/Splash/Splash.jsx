import React from "react";
import "./_splash.scss";
import logo from "../../../assets/logo.png";

export default function Splash() {
    return (
        <>
            <div className="splash">
                <img className="splash__logo" src={logo} alt="" />
                <h1 className="splash__title">Transpvis</h1>
                <p className="spash__subtitle">Transparency Visual Analysis</p>
            </div>
        </>
    );
}
