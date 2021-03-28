import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import Card from "../Card";
import Tag from "../Tag";
import "../Detail/_detail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../utils/colors";

const Stakeholder = ({
    stakeholder,
    stakeholders,
    informationElements,
    relationships
}) => {
    const afterRef = useRef(null);
    const [toggle, setToggle] = useState({
        production: false,
        obligatory: true,
        optional: false,
        restricted: false,
        undecided: false
    });

    useEffect(() => {
        afterRef?.current?.setAttribute(
            "style",
            "--tooltip-type-color: #4A6FA5;"
        );
    }, []);

    const handleToggle = toggleName => {
        setToggle({
            ...toggle,
            [toggleName]: !toggle[toggleName]
        });
    };

    const getRelatedInformationElements = type => {
        return relationships.filter(r => {
            return r.stakeholder === stakeholder.id && r.type === type;
        });
    };

    return (
        <div className="detail__card">
            <div className="detail__title">
                <h2
                    style={{
                        maxWidth: "350px",
                        lineHeight: "2rem"
                    }}
                >
                    {stakeholder.name}
                </h2>
                <span
                    style={{
                        paddingBottom: "3px"
                    }}
                >
                    {stakeholder.label}
                </span>
            </div>
            <div className="detail__info" style={{ width: "100%" }}>
                <div className="detail__type">
                    <p ref={afterRef}>Stakeholder</p>
                </div>
                <p className="detail__description">
                    {stakeholder.description ? (
                        stakeholder.description
                    ) : (
                        <span
                            className="d-flex align-items-start justify-content-center text-muted"
                            style={{
                                margin: "14px 0",
                                fontSize: "14px",
                                width: "100%"
                            }}
                        >
                            No description provided
                        </span>
                    )}
                </p>
                <div className="detail__other">
                    <div
                        className={
                            "detail__list" +
                            (toggle.production ? "" : "-collapsed")
                        }
                    >
                        <div
                            className="d-flex justify-content-between"
                            style={{
                                marginBottom: "20px",
                                marginTop: "20px"
                            }}
                        >
                            <div className="d-flex">
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        lineHeight: "2rem",
                                        maxWidth: "350px"
                                    }}
                                    onClick={() => handleToggle("production")}
                                >
                                    Produced Information elements
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements(
                                            "production"
                                        ).length
                                    }
                                    color="#3d4659"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                fixedWidth
                                size="sm"
                                className={
                                    "detail__toggle" +
                                    (toggle.production ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("production")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.production ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements("production")
                                .length !== 0 ? (
                                getRelatedInformationElements("production").map(
                                    r => {
                                        let ie = informationElements.find(
                                            ie => {
                                                return (
                                                    ie.id ===
                                                    r.information_element
                                                );
                                            }
                                        );
                                        return (
                                            <Card
                                                key={r.id}
                                                label={ie.label}
                                                name={ie.name}
                                                color={colors[ie.type]}
                                            />
                                        );
                                    }
                                )
                            ) : (
                                <span
                                    className="d-flex align-items-start justify-content-center text-muted"
                                    style={{
                                        margin: "30px 0",
                                        fontSize: "14px"
                                    }}
                                >
                                    No information elements
                                </span>
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            "detail__list" +
                            (toggle.obligatory ? "" : "-collapsed")
                        }
                    >
                        <div
                            className="d-flex justify-content-between"
                            style={{
                                marginBottom: "20px",
                                marginTop: "20px"
                            }}
                        >
                            <div className="d-flex">
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        lineHeight: "2rem",
                                        maxWidth: "350px"
                                    }}
                                    onClick={() => handleToggle("obligatory")}
                                >
                                    Obligatory Information elements
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements(
                                            "obligatory"
                                        ).length
                                    }
                                    color="#3d4659"
                                />{" "}
                            </div>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                fixedWidth
                                size="sm"
                                className={
                                    "detail__toggle" +
                                    (toggle.obligatory ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("obligatory")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.obligatory ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements("obligatory")
                                .length !== 0 ? (
                                getRelatedInformationElements("obligatory").map(
                                    r => {
                                        let ie = informationElements.find(
                                            ie => {
                                                return (
                                                    ie.id ===
                                                    r.information_element
                                                );
                                            }
                                        );
                                        return (
                                            <Card
                                                key={r.id}
                                                label={ie.label}
                                                name={ie.name}
                                                color={colors[ie.type]}
                                            />
                                        );
                                    }
                                )
                            ) : (
                                <span
                                    className="d-flex align-items-start justify-content-center text-muted"
                                    style={{
                                        margin: "30px 0",
                                        fontSize: "14px"
                                    }}
                                >
                                    No information elements
                                </span>
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            "detail__list" +
                            (toggle.optional ? "" : "-collapsed")
                        }
                    >
                        <div
                            className="d-flex justify-content-between"
                            style={{
                                marginBottom: "20px",
                                marginTop: "20px"
                            }}
                        >
                            <div className="d-flex">
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        lineHeight: "2rem",
                                        maxWidth: "350px"
                                    }}
                                    onClick={() => handleToggle("optional")}
                                >
                                    Optional Information elements
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements(
                                            "optional"
                                        ).length
                                    }
                                    color="#3d4659"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                fixedWidth
                                size="sm"
                                className={
                                    "detail__toggle" +
                                    (toggle.optional ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("optional")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.optional ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements("optional")
                                .length !== 0 ? (
                                getRelatedInformationElements("optional").map(
                                    r => {
                                        let ie = informationElements.find(
                                            ie => {
                                                return (
                                                    ie.id ===
                                                    r.information_element
                                                );
                                            }
                                        );
                                        return (
                                            <Card
                                                key={r.id}
                                                label={ie.label}
                                                name={ie.name}
                                                color={colors[ie.type]}
                                            />
                                        );
                                    }
                                )
                            ) : (
                                <span
                                    className="d-flex align-items-start justify-content-center text-muted"
                                    style={{
                                        margin: "30px 0",
                                        fontSize: "14px"
                                    }}
                                >
                                    No information elements
                                </span>
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            "detail__list" +
                            (toggle.restricted ? "" : "-collapsed")
                        }
                    >
                        <div
                            className="d-flex justify-content-between"
                            style={{
                                marginBottom: "20px",
                                marginTop: "20px"
                            }}
                        >
                            <div className="d-flex">
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px",
                                        cursor: "pointer",
                                        userSelect: "none",
                                        lineHeight: "2rem",
                                        maxWidth: "350px"
                                    }}
                                    onClick={() => handleToggle("restricted")}
                                >
                                    Restricted Information elements
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements(
                                            "restricted"
                                        ).length
                                    }
                                    color="#3d4659"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                fixedWidth
                                size="sm"
                                className={
                                    "detail__toggle" +
                                    (toggle.restricted ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("restricted")}
                            />
                        </div>

                        <div
                            className={
                                "detail__list_content" +
                                (toggle.restricted ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements("restricted")
                                .length !== 0 ? (
                                getRelatedInformationElements("restricted").map(
                                    r => {
                                        let ie = informationElements.find(
                                            ie => {
                                                return (
                                                    ie.id ===
                                                    r.information_element
                                                );
                                            }
                                        );
                                        return (
                                            <Card
                                                key={r.id}
                                                label={ie.label}
                                                name={ie.name}
                                                color={colors[ie.type]}
                                            />
                                        );
                                    }
                                )
                            ) : (
                                <span
                                    className="d-flex align-items-start justify-content-center text-muted"
                                    style={{
                                        margin: "30px 0",
                                        fontSize: "14px"
                                    }}
                                >
                                    No information elements
                                </span>
                            )}
                        </div>
                    </div>
                    <div
                        className={
                            "detail__list" +
                            (toggle.undecided ? "" : "-collapsed")
                        }
                    >
                        <div
                            className="d-flex justify-content-between"
                            style={{
                                marginBottom: "20px",
                                marginTop: "20px"
                            }}
                        >
                            <div className="d-flex">
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px",
                                        cursor: "pointer",
                                        userSelect: "none"
                                    }}
                                    onClick={() => handleToggle("undecided")}
                                >
                                    Undecided Information elements
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements(
                                            "undecided"
                                        ).length
                                    }
                                    color="#3d4659"
                                />
                            </div>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                fixedWidth
                                size="sm"
                                className={
                                    "detail__toggle" +
                                    (toggle.undecided ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("undecided")}
                            />
                        </div>

                        <div
                            className={
                                "detail__list_content" +
                                (toggle.undecided ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements("undecided")
                                .length !== 0 ? (
                                getRelatedInformationElements("undecided").map(
                                    r => {
                                        let ie = informationElements.find(
                                            ie => {
                                                return (
                                                    ie.id ===
                                                    r.information_element
                                                );
                                            }
                                        );
                                        return (
                                            <Card
                                                key={r.id}
                                                label={ie.label}
                                                name={ie.name}
                                                color={colors[ie.type]}
                                            />
                                        );
                                    }
                                )
                            ) : (
                                <span
                                    className="d-flex align-items-start justify-content-center text-muted"
                                    style={{
                                        margin: "30px 0",
                                        fontSize: "14px"
                                    }}
                                >
                                    No information elements
                                </span>
                            )}
                            {/* <span
                                className="d-flex align-items-start justify-content-center text-muted"
                                style={{
                                    margin: "30px 0",
                                    fontSize: "14px"
                                }}
                            >
                                No information elements
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapSateToProps = state => ({
    stakeholder: state.application.focused,
    stakeholders: state.stakeholder.stakeholders,
    informationElements: state.informationElement.informationElements,
    relationships: state.relationship.relations
});

export default connect(mapSateToProps)(Stakeholder);
