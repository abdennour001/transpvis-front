import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import Card from "../Card";
import Tag from "../Tag";
import "./_informationelement.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../utils/colors";

const InformationElement = ({
    informationElement,
    stakeholders,
    informationElements,
    relationships,
    help
}) => {
    const afterRef = useRef(null);
    const [toggle, setToggle] = useState({
        related: false,
        provider: true,
        receive: false,
        request: false,
        restricted: false
    });

    useEffect(() => {
        afterRef?.current?.setAttribute(
            "style",
            `--tooltip-type-color: ${colors[informationElement.type]};`
        );
    }, [informationElement.type]);

    const handleToggle = toggleName => {
        setToggle({
            ...toggle,
            [toggleName]: !toggle[toggleName]
        });
    };

    const getRelatedInformationElements = () => {
        return informationElement.information_elements
            .map(ie => {
                return informationElements.find(ie_ => {
                    return ie_.id === ie;
                });
            })
            .sort((a, b) => {
                return a.label > b.label ? 1 : -1;
            });
    };

    const getRelatedStakeholders = type => {
        return relationships
            .filter(r => {
                return (
                    r.information_element === informationElement.id &&
                    r.type === type
                );
            })
            .map(r => {
                return r.stakeholder;
            })
            .map(s => {
                return stakeholders.find(s_ => {
                    return s_.id === s;
                });
            })
            .sort((a, b) => {
                return a.label > b.label ? 1 : -1;
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
                    {informationElement.name}
                </h2>
                <span
                    style={{
                        paddingBottom: "3px"
                    }}
                >
                    {informationElement.label}
                </span>
            </div>
            <div className="detail__info">
                <div className="detail__type">
                    <p ref={afterRef}>Information Element</p>
                </div>
                <p className="detail__description">
                    {informationElement.description ? (
                        informationElement.description
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
                            (toggle.related ? "" : "-collapsed")
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
                                    onClick={() => handleToggle("related")}
                                    className={help ? "tip" : ""}
                                >
                                    Related Information Elements
                                    {help && (
                                        <span className="help__text">
                                            Other <b>Information elements</b>{" "}
                                            that uses this specific information
                                            element in their process.
                                        </span>
                                    )}
                                </h4>
                                <Tag
                                    content={
                                        getRelatedInformationElements().length
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
                                    (toggle.related ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("related")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.related ? "" : "-collapsed")
                            }
                        >
                            {getRelatedInformationElements().length !== 0 ? (
                                getRelatedInformationElements().map(ie => {
                                    return (
                                        <Card
                                            key={ie.id}
                                            label={ie.label}
                                            name={ie.name}
                                            color={colors[ie.type]}
                                        />
                                    );
                                })
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
                            (toggle.provider ? "" : "-collapsed")
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
                                    onClick={() => handleToggle("provider")}
                                    className={help ? "tip" : ""}
                                >
                                    Information Element Provider
                                    {help && (
                                        <span className="help__text">
                                            The <b>stakeholder</b> that provides
                                            this information element.
                                        </span>
                                    )}
                                </h4>
                                <Tag
                                    content={
                                        getRelatedStakeholders("production")
                                            .length
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
                                    (toggle.provider ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("provider")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.provider ? "" : "-collapsed")
                            }
                        >
                            {getRelatedStakeholders("production").length !==
                            0 ? (
                                getRelatedStakeholders("production").map(s => (
                                    <Card
                                        key={s.id}
                                        label={s.label}
                                        name={s.name}
                                        color={colors["stakeholder"]}
                                    />
                                ))
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
                            (toggle.receive ? "" : "-collapsed")
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
                                    onClick={() => handleToggle("receive")}
                                    className={help ? "tip" : ""}
                                >
                                    Receiving Stakeholders
                                    {help && (
                                        <span className="help__text">
                                            The <b>stakeholders</b> that
                                            receives this information element
                                            based on coercive information
                                            provision, or legal information
                                            requests.
                                        </span>
                                    )}
                                </h4>
                                <Tag
                                    content={
                                        getRelatedStakeholders("obligatory")
                                            .length
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
                                    (toggle.receive ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("receive")}
                            />
                        </div>
                        <div
                            className={
                                "detail__list_content" +
                                (toggle.receive ? "" : "-collapsed")
                            }
                        >
                            {getRelatedStakeholders("obligatory").length !==
                            0 ? (
                                getRelatedStakeholders("obligatory").map(s => (
                                    <Card
                                        key={s.id}
                                        label={s.label}
                                        name={s.name}
                                        color={colors["stakeholder"]}
                                    />
                                ))
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
                            (toggle.request ? "" : "-collapsed")
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
                                    onClick={() => handleToggle("request")}
                                    className={help ? "tip" : ""}
                                >
                                    Requesting Stakeholders
                                    {help && (
                                        <span className="help__text">
                                            The <b>stakeholders</b> that
                                            receives this information element as
                                            a result of voluntary information
                                            provision or personal information
                                            demands.
                                        </span>
                                    )}
                                </h4>
                                <Tag
                                    content={
                                        getRelatedStakeholders("optional")
                                            .length
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
                                    (toggle.request ? "" : "-collapsed")
                                }
                                onClick={() => handleToggle("request")}
                            />
                        </div>

                        <div
                            className={
                                "detail__list_content" +
                                (toggle.request ? "" : "-collapsed")
                            }
                        >
                            {getRelatedStakeholders("optional").length !== 0 ? (
                                getRelatedStakeholders("optional").map(s => (
                                    <Card
                                        key={s.id}
                                        label={s.label}
                                        name={s.name}
                                        color={colors["stakeholder"]}
                                    />
                                ))
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
                                    className={help ? "tip" : ""}
                                >
                                    Restricted Stakeholders
                                    {help && (
                                        <span className="help__text">
                                            <b>The stakeholders</b> that this
                                            information element is hidden from
                                            them, and they don't have rights to
                                            see or ispect it.
                                        </span>
                                    )}
                                </h4>
                                <Tag
                                    content={
                                        getRelatedStakeholders("restricted")
                                            .length
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
                            {getRelatedStakeholders("restricted").length !==
                            0 ? (
                                getRelatedStakeholders("restricted").map(s => (
                                    <Card
                                        key={s.id}
                                        label={s.label}
                                        name={s.name}
                                        color={colors["stakeholder"]}
                                    />
                                ))
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
                </div>
            </div>
        </div>
    );
};

const mapSateToProps = state => ({
    informationElement: state.application.focused,
    stakeholders: state.stakeholder.stakeholders,
    informationElements: state.informationElement.informationElements,
    relationships: state.relationship.relations,
    help: state.help.help
});

export default connect(mapSateToProps)(InformationElement);
