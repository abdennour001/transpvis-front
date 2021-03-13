import { React, useEffect, useRef, useState } from "react";

import Card from "../Card";
import Tag from "../Tag";
import "./_informationelement.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const InformationElement = ({ data }) => {
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
            "--tooltip-type-color: #61C9A8;"
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
                    Collection of personal information
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
                    <p ref={afterRef}>Information Element</p>
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
                                >
                                    Related Information Elements
                                </h4>
                                <Tag content="3" color="#3d4659" />
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
                            <Card
                                label="02"
                                name="Purpose for using my own personal information in amazon company"
                                color="#FB5012"
                            />
                            <Card label="03" name="Cookies" color="#FFDA0A" />
                            <Card
                                label="04"
                                name="Sharing of personal information"
                                color="#FB5012"
                            />
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
                                >
                                    Information Element Provider
                                </h4>
                                <Tag content="1" color="#3d4659" />{" "}
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
                            <Card
                                label="02"
                                name="Amazon web services team"
                                color="#4A6FA5"
                            />
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
                                >
                                    Receiving Stakeholders
                                </h4>
                                <Tag content="1" color="#3d4659" />
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
                            <Card label="01" name="Customers" color="#4A6FA5" />
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
                                >
                                    Requesting Stakeholders
                                </h4>
                                <Tag content="0" color="#3d4659" />
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
                                    Restricted Stakeholders
                                </h4>
                                <Tag content="0" color="#3d4659" />
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

export default InformationElement;
