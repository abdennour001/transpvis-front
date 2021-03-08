import { React, useEffect, useRef } from "react";

import Card from "../Card";
import Tag from "../Tag";
import "./_detail.scss";

const Detail = ({ type, data }) => {
    const afterRef = useRef(null);

    useEffect(() => {
        console.log(type);
        afterRef.current.setAttribute(
            "style",
            "--tooltip-type-color: #4A6FA5;"
        );
    }, []);

    return (
        <>
            <div className="detail">
                <div className="detail__card">
                    <div className="detail__title">
                        <h2>Customers</h2>
                        <span>01</span>
                    </div>
                    <div className="detail__info">
                        <div className="detail__type">
                            <p ref={afterRef}>Stakeholder</p>
                        </div>
                        <p className="detail__description">
                            We created this introduction notebook to guide you
                            through your first steps in exploring and
                            visualizing data with Observable. It’s all yours to
                            edit, tinker with, and return to as needed.
                        </p>
                        <div className="detail__other">
                            <div
                                className="d-flex"
                                style={{
                                    marginBottom: "20px",
                                    marginTop: "20px"
                                }}
                            >
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px"
                                    }}
                                >
                                    Produced Information elements
                                </h4>
                                <Tag content="1" color="#3d4659" />
                            </div>
                            <Card
                                label="01"
                                name="Personal information"
                                color="#FFDA0A"
                            />
                            <div
                                className="d-flex"
                                style={{
                                    marginBottom: "20px",
                                    marginTop: "20px"
                                }}
                            >
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px"
                                    }}
                                >
                                    Obligatory Information elements
                                </h4>
                                <Tag content="2" color="#3d4659" />
                            </div>
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
                            <div
                                className="d-flex"
                                style={{
                                    marginBottom: "20px",
                                    marginTop: "20px"
                                }}
                            >
                                <h4
                                    style={{
                                        margin: "0",
                                        marginTop: "-1px"
                                    }}
                                >
                                    Restricted Information elements
                                </h4>
                                <Tag content="2" color="#3d4659" />
                            </div>
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
                </div>

                {type === "stakeholder" && <></>}
            </div>
        </>
    );
};

export default Detail;
