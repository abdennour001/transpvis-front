import { React, useEffect, useRef, useState } from "react";

import Card from "../Card";
import Tag from "../Tag";
import "../Detail/_detail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Stakeholder = ({ data }) => {
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

    return (
        <div className="detail__card">
            <div className="detail__title">
                <h2
                    style={{
                        maxWidth: "350px",
                        lineHeight: "2rem"
                    }}
                >
                    Customers
                </h2>
                <span
                    style={{
                        paddingBottom: "3px"
                    }}
                >
                    01
                </span>
            </div>
            <div className="detail__info">
                <div className="detail__type">
                    <p ref={afterRef}>Stakeholder</p>
                </div>
                <p className="detail__description">
                    We created this introduction notebook to guide you through
                    your first steps in exploring and visualizing data with
                    Observable. It’s all yours to edit, tinker with, and return
                    to as needed.
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
                                <Tag content="1" color="#3d4659" />
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
                            <Card
                                label="01"
                                name="Personal information"
                                color="#FFDA0A"
                            />
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
                                <Tag content="2" color="#3d4659" />{" "}
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
                            <Card
                                label="05"
                                name="Location of personal information"
                                color="#61C9A8"
                            />
                            <Card
                                label="06"
                                name="Security of personal information"
                                color="#FB5012"
                            />
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
                                <Tag content="0" color="#3d4659" />
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
                            <span
                                className="d-flex align-items-start justify-content-center text-muted"
                                style={{
                                    margin: "30px 0",
                                    fontSize: "14px"
                                }}
                            >
                                No information elements
                            </span>
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
                                <Tag content="2" color="#3d4659" />
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
                            <Card
                                label="01"
                                name="Personal information"
                                color="#FFDA0A"
                            />
                            <Card
                                label="02"
                                name="Purpose for using my own personal information in amazon company"
                                color="#FB5012"
                            />
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
                                <Tag content="0" color="#3d4659" />
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
                            <span
                                className="d-flex align-items-start justify-content-center text-muted"
                                style={{
                                    margin: "30px 0",
                                    fontSize: "14px"
                                }}
                            >
                                No information elements
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stakeholder;
