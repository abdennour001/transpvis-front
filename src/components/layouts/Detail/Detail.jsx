import { React, useEffect } from "react";
import { connect } from "react-redux";

import Stakeholder from "../Stakeholder";
import InformationElement from "../InformationElement";
import "./_detail.scss";
import { handleTipPosition } from "../../../utils/app.utils";

const Detail = ({ focusedElement, help }) => {
    useEffect(() => {
        if (help) {
            document.querySelectorAll("[data-tip]").forEach(element => {
                element.removeEventListener("mouseenter", handleTipPosition);
                element.addEventListener("mouseenter", handleTipPosition);
            });
        }
    });
    return (
        <>
            <div className="detail">
                {!focusedElement ? (
                    <div
                        className="detail__card"
                        style={{
                            height: "150px",
                            lineHeight: "2rem",
                            fontSize: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <p
                            className="text-muted"
                            style={{ textAlign: "center" }}
                        >
                            Please select a stakeholder or an information
                            element
                        </p>
                    </div>
                ) : focusedElement.label.includes("S") ? (
                    <>
                        <Stakeholder />
                    </>
                ) : (
                    <>
                        <InformationElement />
                    </>
                )}
            </div>
        </>
    );
};

const mapSateToProps = state => ({
    focusedElement: state.application.focused,
    help: state.help.help
});

export default connect(mapSateToProps)(Detail);
