import { React, useState, useEffect } from "react";
import { connect } from "react-redux";

// Actions
import { getStakeholders } from "../../../redux/actions/stakeholderActions";
import { getInformationElements } from "../../../redux/actions/informationElementsActions";

import Header from "../../layouts/Header";
import Card from "../../layouts/Card";
import Tag from "../../layouts/Tag";
import Control from "../../layouts/Control";
import Detail from "../../layouts/Detail";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExpand,
    // faSearchPlus,
    // faSearchMinus ,
    faCompress
} from "@fortawesome/free-solid-svg-icons";

import "./_home.scss";

const Home = ({
    informationElements,
    loading,
    getStakeholders,
    getInformationElements
}) => {
    const [expanded, setExpanded] = useState(true);
    const handleToggleViz = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        getInformationElements({ application: 1 });
    }, []);

    useEffect(() => {
        if (!loading && informationElements && informationElements.length)
            console.log(informationElements);
    }, [loading]);
    return (
        <>
            <div className="home">
                <Header />

                <div className="home__content">
                    <div className="home__top">
                        <Control />
                    </div>
                    <div className="home__bottom">
                        <div
                            className={
                                "home__grid" + (expanded ? "" : "-expanded")
                            }
                        >
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
                                <div
                                    className="home__expand"
                                    style={{ right: expanded ? "14px" : 0 }}
                                >
                                    <FontAwesomeIcon
                                        icon={expanded ? faExpand : faCompress}
                                        size="lg"
                                        fixedWidth
                                        className="icon"
                                        onClick={handleToggleViz}
                                    />
                                    {/* <FontAwesomeIcon
                                        icon={faSearchPlus}
                                        size="lg"
                                        fixedWidth
                                        className="icon"
                                    />
                                    <FontAwesomeIcon
                                        icon={faSearchMinus}
                                        size="lg"
                                        fixedWidth
                                        className="icon"
                                    /> */}
                                </div>
                                <p>🤙 Main visualisation</p>
                            </div>
                            <div
                                className={
                                    "home__right" +
                                    (expanded ? "" : "-expanded")
                                }
                            >
                                <Detail type={"information_element"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapSateToProps = state => ({
    informationElements: state.informationElement.informationElements,
    loading: state.informationElement.loading
});

export default connect(mapSateToProps, {
    getStakeholders,
    getInformationElements
})(Home);
