import { React, useState } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

import "./_control.scss";

import Tag from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronUp,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";

const Control = ({ application, stakeholder, informationElement, help }) => {
    let [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    if (application.loading) {
        return (
            <div className="control control-collapsed">
                <FontAwesomeIcon
                    className="spinner"
                    icon={faSpinner}
                    size="lg"
                />
            </div>
        );
    }

    return (
        <>
            <div className={"control " + (isOpen ? "" : "control-collapsed")}>
                <div className="control__header">
                    <div className="control__left">
                        {application.loading ? (
                            <h2>{application.application?.name}</h2>
                        ) : (
                            <h2>{application.application?.name}</h2>
                        )}
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
                                className={help ? "tip" : ""}
                                data-tip="0"
                            >
                                Stakeholders
                                {help && (
                                    <div className="tooltip__wrapper">
                                        <span className="help__text">
                                            <b>Stakeholders</b> are the people
                                            that use the service or the
                                            software, departements,
                                            organisations, etc., which are
                                            involved in the information exchange
                                            process, providing, receiving, or
                                            requesting transparency. We can
                                            group stakeholders by one entity,
                                            for example User or IT Department.
                                            However, the exchanged information
                                            within an information exchange
                                            system may concern all stakeholders
                                            within that system, or it may
                                            concern the public audience.
                                        </span>
                                    </div>
                                )}
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
                                className={help ? "tip" : ""}
                                data-tip="0"
                            >
                                Policy
                                {help && (
                                    <div className="tooltip__wrapper">
                                        <span className="help__text">
                                            <b>Policy transparency</b> every
                                            question whose answer provides
                                            goals, intentions, policies and
                                            decision making is a policy
                                            transparency question. “Why?” is the
                                            main question here, i.e., why
                                            certain action is performed or for
                                            what reason this action is performed
                                            in the context of transparency. For
                                            example, in a hosting service
                                            platform, policy transparency
                                            reveals why encryption is needed in
                                            servers, or why I have a limited
                                            storage capacity.
                                        </span>
                                    </div>
                                )}
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
                                className={help ? "tip" : ""}
                                data-tip="0"
                            >
                                Process
                                {help && (
                                    <div className="tooltip__wrapper">
                                        <span className="help__text">
                                            <b>Process transparency</b> every
                                            question whose answer provides
                                            procedures, processes, behaviours
                                            and interactions is a process
                                            transparency question. “How?” is the
                                            main question here, i.e., how
                                            something is performed or done in
                                            the context of transparency. For
                                            example in a hosting service
                                            platform, process transparency
                                            reveals how data is encrypted in the
                                            servers, and how servers are immune
                                            from cyber attacks.
                                        </span>
                                    </div>
                                )}
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
                                className={help ? "tip" : ""}
                                data-tip="0"
                            >
                                Data
                                {help && (
                                    <div className="tooltip__wrapper">
                                        <span className="help__text">
                                            <b>Data transparency</b> every
                                            question whose answer provides data,
                                            content or information is a data
                                            transparency question. “What? When?
                                            Where? Who?” These questions
                                            primarily answer what information is
                                            needed and who are the stakeholders
                                            in the context of transparency. For
                                            example, in a hosting service
                                            platform, data transparency reveals
                                            the server's performances to the
                                            client for each plan, and the price
                                            of each plan.
                                        </span>
                                    </div>
                                )}
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
    application: state.application,
    stakeholder: state.stakeholder,
    informationElement: state.informationElement,
    help: state.help.help
});

export default connect(mapSateToProps)(Control);
