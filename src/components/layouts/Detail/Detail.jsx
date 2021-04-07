import { React } from "react";
import { connect } from "react-redux";

import Stakeholder from "../Stakeholder";
import InformationElement from "../InformationElement";
import "./_detail.scss";

const Detail = ({ focusedElement }) => {
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
                        <p className="text-muted" style={{textAlign: "center"}}>
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
    focusedElement: state.application.focused
});

export default connect(mapSateToProps)(Detail);
