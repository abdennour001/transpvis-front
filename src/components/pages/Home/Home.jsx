import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

// Actions
import { getStakeholders } from "../../../redux/actions/stakeholderActions";
import { getInformationElements } from "../../../redux/actions/informationElementsActions";
import { getRelationships } from "../../../redux/actions/relationsActions";
import {
    getApplications,
    setApplication,
    setFocused,
    removeFocused
} from "../../../redux/actions/applicationActions";

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
import { colors } from "../../../utils/colors";
import Visualization from "../../layouts/Visualization/Visualization";

const Home = ({
    application,
    stakeholder,
    informationElement,
    relationship,

    getStakeholders,
    getInformationElements,
    getRelationships,
    getApplications,
    setApplication,
    setFocused,
    removeFocused
}) => {
    const [expanded, setExpanded] = useState(true);
    const handleToggleViz = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const selectedApp = 2;
        getApplications().then(() => {
            setApplication(selectedApp);
        });
        getStakeholders({ application: selectedApp });
        getInformationElements({ application: selectedApp });
        getRelationships({ stakeholder__application: selectedApp });
    }, []);

    const handleCardClick = (event, element) => {
        event.preventDefault();
        if (!application.focused) {
            setFocused(element);
        } else {
            if (application.focused === element) {
                removeFocused(element);
            } else {
                setFocused(element);
            }
        }
    };

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
                                    {stakeholder.loading ? (
                                        <Tag isLoading={true} />
                                    ) : (
                                        <Tag
                                            content={
                                                stakeholder.stakeholders?.length
                                            }
                                            color="#3d4659"
                                        />
                                    )}
                                </div>
                                {stakeholder.loading ? (
                                    <>
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                    </>
                                ) : !stakeholder.stakeholders ||
                                  !stakeholder.stakeholders.length ? (
                                    <div>Empty...</div>
                                ) : (
                                    <>
                                        {stakeholder.stakeholders.map(s => (
                                            <Card
                                                key={s.id}
                                                label={s.label}
                                                name={s.name}
                                                color="#4A6FA5"
                                                onClick={e =>
                                                    handleCardClick(e, s)
                                                }
                                            />
                                        ))}
                                    </>
                                )}
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
                                    {informationElement.loading ? (
                                        <Tag isLoading={true} />
                                    ) : (
                                        <Tag
                                            content={
                                                informationElement
                                                    .informationElements?.length
                                            }
                                            color="#3d4659"
                                        />
                                    )}
                                </div>
                                {informationElement.loading ? (
                                    <>
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                    </>
                                ) : !informationElement.informationElements ||
                                  !informationElement.informationElements
                                      .length ? (
                                    <div>Empty...</div>
                                ) : (
                                    <>
                                        {informationElement.informationElements.map(
                                            ie => (
                                                <Card
                                                    key={ie.id}
                                                    label={ie.label}
                                                    name={ie.name}
                                                    color={colors[ie.type]}
                                                    onClick={e =>
                                                        handleCardClick(e, ie)
                                                    }
                                                />
                                            )
                                        )}
                                    </>
                                )}
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
                                <Visualization />
                            </div>
                            <div
                                className={
                                    "home__right" +
                                    (expanded ? "" : "-expanded")
                                }
                            >
                                <Detail />
                            </div>
                        </div>
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
    relationship: state.relationship
});

export default connect(mapSateToProps, {
    getStakeholders,
    getInformationElements,
    getRelationships,
    getApplications,
    setApplication,
    setFocused,
    removeFocused
})(Home);
