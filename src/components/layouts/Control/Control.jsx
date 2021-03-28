import { React, useState } from "react";
import { connect } from "react-redux";

import "./_control.scss";

import Tag from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Control = ({ application, stakeholder, informationElement }) => {
    let [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={"control " + (isOpen ? "" : "control-collapsed")}>
                <div className="control__header">
                    <div className="control__left">
                        <h2>{application?.name}</h2>
                    </div>
                    <div className="control__right">
                        {/* <FontAwesomeIcon
                            icon={faInfo}
                            fixedWidth
                            size="sm"
                        />
                        <a href="">read transparency note</a> */}
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Stakeholders
                            </p>
                            <Tag
                                content={
                                    stakeholder.stakeholders &&
                                    stakeholder.stakeholders.length
                                }
                                color="#3d4659"
                            />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Policy
                            </p>
                            <Tag
                                content={
                                    informationElement.informationElements?.filter(
                                        i => {
                                            return i.type === "policy";
                                        }
                                    ).length
                                }
                                color="#3d4659"
                            />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Process
                            </p>
                            <Tag
                                content={
                                    informationElement.informationElements?.filter(
                                        i => {
                                            return i.type === "process";
                                        }
                                    ).length
                                }
                                color="#3d4659"
                            />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Data
                            </p>
                            <Tag
                                content={
                                    informationElement.informationElements?.filter(
                                        i => {
                                            return i.type === "data";
                                        }
                                    ).length
                                }
                                color="#3d4659"
                            />
                        </div>
                    </div>
                </div>
                <div className="control__bottom">
                    <div
                        className={
                            "control__pannel" +
                            (isOpen ? "" : " control__pannel-callapsed")
                        }
                    >
                        <p>✏️ Control here ...</p>
                    </div>

                    <div
                        className="control__toggle"
                        onClick={handleToggle}
                        title="Toggle menu"
                    >
                        <FontAwesomeIcon icon={faChevronUp} size="sm" />
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </div>
                </div>
            </div>
        </>
    );
};

const mapSateToProps = state => ({
    application: state.application.application,
    stakeholder: state.stakeholder,
    informationElement: state.informationElement
});

export default connect(mapSateToProps)(Control);
