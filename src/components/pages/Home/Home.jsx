import React from "react";
import Header from "../../layouts/Header";
import Card from "../../layouts/Card";
import Tag from "../../layouts/Tag";
import Control from "../../layouts/Control";
import Detail from "../../layouts/Detail";

import "./_home.scss";

const Home = () => {
    return (
        <>
            <div className="home">
                <Header />

                <div className="home__content">
                    <div className="home__top">
                        <Control />
                    </div>
                    <div className="home__bottom">
                        <div className="home__grid">
                            <div className="home__left">
                                <div className="home__navigation">
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#4A6FA5" }}
                                        ></div>
                                        <span>Stakeholders</span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#FB5012" }}
                                        ></div>
                                        <span>Policy</span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#61C9A8" }}
                                        ></div>
                                        <span>Process</span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#FFDA0A" }}
                                        ></div>
                                        <span>Data</span>
                                    </div>
                                </div>
                                <br />
                                <div
                                    className="d-flex"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <h3
                                        style={{
                                            margin: "0",
                                            marginTop: "-1px"
                                        }}
                                    >
                                        Stakeholders
                                    </h3>
                                    <Tag content="3" color="#3d4659" />
                                </div>
                                <Card
                                    label="01"
                                    name="Customers"
                                    color="#4A6FA5"
                                />
                                <Card
                                    label="02"
                                    name="Amazon web services team"
                                    color="#4A6FA5"
                                />
                                <Card
                                    label="03"
                                    name="3rd party services"
                                    color="#4A6FA5"
                                />
                                <br />
                                <div
                                    className="d-flex"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <h3
                                        style={{
                                            margin: "0",
                                            marginTop: "-1px"
                                        }}
                                    >
                                        Information elements
                                    </h3>
                                    <Tag content="6" color="#3d4659" />
                                </div>
                                <Card
                                    label="01"
                                    name="Collection of personal information"
                                    color="#61C9A8"
                                />
                                <Card
                                    label="02"
                                    name="Purpose for using my own personal information in amazon company"
                                    color="#FB5012"
                                />
                                <Card
                                    label="03"
                                    name="Cookies"
                                    color="#FFDA0A"
                                />
                                <Card
                                    label="04"
                                    name="Sharing of personal information"
                                    color="#FB5012"
                                />
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
                            <div className="home__middle">
                                <p>🤙 Main visualisation</p>
                            </div>
                            <div className="home__right">
                                <Detail type={"information_element"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
