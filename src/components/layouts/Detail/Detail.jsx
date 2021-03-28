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
                    <>
                        <p>Nothing</p>
                    </>
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
