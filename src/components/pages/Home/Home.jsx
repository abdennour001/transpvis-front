import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

// Actions
import { toggleHelp } from "../../../redux/actions/helpActions";
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
import Modal from "../../layouts/Modal";
import ModalMenu from "../../layouts/ModalMenu";

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
import {
    overed,
    outed,
    clicked,
    setPrimaryAnimation,
    unsetPrimaryAnimation
} from "../../../utils/d3";

import { toggleModal } from "../../../redux/actions/modalActions";
import StakeholderForm from "../../forms/StakeholderForm";
import InformationElementForm from "../../forms/InformationElementForm/InformationElementForm";
import InformationElementAssociationForm from "../../forms/InformationElementAssociationForm/InformationElementAssociationForm";
import StakeholderInformationElementRelationshipForm from "../../forms/StakeholderInformationElementRelationshipForm/StakeholderInformationElementRelationshipForm";

const Home = ({
    application,
    stakeholder,
    informationElement,
    relationship,
    help,
    viz,
    type,

    setFocused,
    removeFocused,
    toggleHelp,
    toggleModal
}) => {
    const [expanded, setExpanded] = useState(true);
    const [endingHelp, setEndingHelp] = useState(false);
    const handleToggleViz = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {}, []);

    const handleCardClick = (event, element) => {
        event.preventDefault();
        if (!application.focused) {
            setPrimaryAnimation(
                event,
                viz.root
                    .leaves()
                    .find(node => node.data.label === element.label)
            );
            setFocused(element);
        } else {
            if (application.focused === element) {
                unsetPrimaryAnimation(
                    event,
                    viz.root
                        .leaves()
                        .find(node => node.data.label === element.label)
                );
                removeFocused(element);
            } else {
                unsetPrimaryAnimation(
                    event,
                    viz.root
                        .leaves()
                        .find(
                            node =>
                                node.data.label === application.focused.label
                        )
                );
                setTimeout(() => {
                    setPrimaryAnimation(
                        event,
                        viz.root
                            .leaves()
                            .find(node => node.data.label === element.label)
                    );
                }, 400);
                setFocused(element);
            }
        }
    };

    const endHelp = () => {
        setEndingHelp(true);
        setTimeout(() => {
            toggleHelp();
            setEndingHelp(false);
        }, 500);
    };

    const renderForm = () => {
        switch (type) {
            case "stakeholder":
                return <StakeholderForm />;
            case "information-element":
                return <InformationElementForm />;
            case "ie-association":
                return <InformationElementAssociationForm />;
            case "stakeholder-information-element-relationship":
                return <StakeholderInformationElementRelationshipForm />;
            case "menu":
                return <ModalMenu />;
            default:
                break;
        }
    };

    const handleMenuClick = (e, type) => {
        toggleModal(type);
    };

    return (
        <>
            <Modal>{renderForm()}</Modal>
            <div className="home">
                {(help || endingHelp) && (
                    <>
                        <div
                            className={
                                "home__help fromTop " +
                                (endingHelp ? "fromBottom" : "")
                            }
                            onClick={() => {
                                endHelp();
                            }}
                        >
                            <span>Exit help mode</span>
                        </div>
                    </>
                )}

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
                                        <span
                                            className={help ? "tip" : ""}
                                            data-tip="1"
                                        >
                                            Stakeholders
                                            {help && (
                                                <div className="tooltip__wrapper">
                                                    <span className="help__text">
                                                        <b>Stakeholders</b> are
                                                        the people that use the
                                                        service or the software,
                                                        departements,
                                                        organisations, etc.,
                                                        which are involved in
                                                        the information exchange
                                                        process, providing,
                                                        receiving, or requesting
                                                        transparency. We can
                                                        group stakeholders by
                                                        one entity, for example
                                                        User or IT Department.
                                                        However, the exchanged
                                                        information within an
                                                        information exchange
                                                        system may concern all
                                                        stakeholders within that
                                                        system, or it may
                                                        concern the public
                                                        audience.
                                                    </span>
                                                </div>
                                            )}
                                        </span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#FB5012" }}
                                        ></div>
                                        <span
                                            className={help ? "tip" : ""}
                                            data-tip="1"
                                        >
                                            Policy
                                            {help && (
                                                <div className="tooltip__wrapper">
                                                    <span className="help__text">
                                                        <b>
                                                            Policy transparency
                                                        </b>{" "}
                                                        every question whose
                                                        answer provides goals,
                                                        intentions, policies and
                                                        decision making is a
                                                        policy transparency
                                                        question. “Why?” is the
                                                        main question here,
                                                        i.e., why certain action
                                                        is performed or for what
                                                        reason this action is
                                                        performed in the context
                                                        of transparency. For
                                                        example, in a hosting
                                                        service platform, policy
                                                        transparency reveals why
                                                        encryption is needed in
                                                        servers, or why I have a
                                                        limited storage
                                                        capacity.
                                                    </span>
                                                </div>
                                            )}
                                        </span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#61C9A8" }}
                                        ></div>
                                        <span
                                            className={help ? "tip" : ""}
                                            data-tip="1"
                                        >
                                            Process
                                            {help && (
                                                <div className="tooltip__wrapper">
                                                    <span className="help__text">
                                                        <b>
                                                            Process transparency
                                                        </b>{" "}
                                                        every question whose
                                                        answer provides
                                                        procedures, processes,
                                                        behaviours and
                                                        interactions is a
                                                        process transparency
                                                        question. “How?” is the
                                                        main question here,
                                                        i.e., how something is
                                                        performed or done in the
                                                        context of transparency.
                                                        For example in a hosting
                                                        service platform,
                                                        process transparency
                                                        reveals how data is
                                                        encrypted in the
                                                        servers, and how servers
                                                        are immune from cyber
                                                        attacks.
                                                    </span>
                                                </div>
                                            )}
                                        </span>
                                    </div>
                                    <div className="home__navinfo">
                                        <div
                                            className="home__navcolor"
                                            style={{ borderColor: "#FFDA0A" }}
                                        ></div>
                                        <span
                                            className={help ? "tip" : ""}
                                            data-tip="1"
                                        >
                                            Data
                                            {help && (
                                                <div className="tooltip__wrapper">
                                                    <span className="help__text">
                                                        <b>Data transparency</b>{" "}
                                                        every question whose
                                                        answer provides data,
                                                        content or information
                                                        is a data transparency
                                                        question. “What? When?
                                                        Where? Who?” These
                                                        questions primarily
                                                        answer what information
                                                        is needed and who are
                                                        the stakeholders in the
                                                        context of transparency.
                                                        For example, in a
                                                        hosting service
                                                        platform, data
                                                        transparency reveals the
                                                        server's performances to
                                                        the client for each
                                                        plan, and the price of
                                                        each plan.
                                                    </span>
                                                </div>
                                            )}
                                        </span>
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
                                        className={help ? "tip" : ""}
                                        data-tip="1"
                                    >
                                        Stakeholders
                                        {help && (
                                            <div className="tooltip__wrapper">
                                                <span className="help__text">
                                                    <b>Stakeholders</b> are the
                                                    people that use the service
                                                    or the software,
                                                    departements, organisations,
                                                    etc., which are involved in
                                                    the information exchange
                                                    process, providing,
                                                    receiving, or requesting
                                                    transparency. We can group
                                                    stakeholders by one entity,
                                                    for example User or IT
                                                    Department. However, the
                                                    exchanged information within
                                                    an information exchange
                                                    system may concern all
                                                    stakeholders within that
                                                    system, or it may concern
                                                    the public audience.
                                                </span>
                                            </div>
                                        )}
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
                                <Card
                                    addNew={true}
                                    title={"add new stakeholder"}
                                    onClick={e => {
                                        handleMenuClick(e, "stakeholder");
                                    }}
                                />

                                {stakeholder.loading ? (
                                    <>
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                        <Card isLoading={true} />
                                    </>
                                ) : !stakeholder.stakeholders ||
                                  !stakeholder.stakeholders.length ? (
                                    <span
                                        className="d-flex align-items-start justify-content-center text-muted"
                                        style={{
                                            margin: "14px 0",
                                            fontSize: "14px",
                                            width: "100%"
                                        }}
                                    >
                                        No stakeholders
                                    </span>
                                ) : (
                                    <>
                                        {stakeholder.stakeholders.map(s => (
                                            <Card
                                                id={`card-${s.id}`}
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
                                        className={help ? "tip" : ""}
                                        data-tip="1"
                                    >
                                        Information elements
                                        {help && (
                                            <div className="tooltip__wrapper">
                                                <span className="help__text">
                                                    <b>Information elements</b>{" "}
                                                    are pieces of information
                                                    exchanged amongst
                                                    stakeholders. IPs or
                                                    information providers are
                                                    responsible for form and
                                                    present the information to
                                                    the IRs or information
                                                    receivers. The way the{" "}
                                                    <b>information elements</b>{" "}
                                                    are formed and presented to
                                                    others is affected by
                                                    stakeholders’ transparency
                                                    requirements. There are
                                                    three different types of
                                                    information elements,
                                                    related to their
                                                    transparency meaningfulness.
                                                    These types are as follows:{" "}
                                                    <b>data</b> type,{" "}
                                                    <b>process</b> type, or{" "}
                                                    <b>policy</b> type.
                                                </span>
                                            </div>
                                        )}
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
                                <Card
                                    title={"add new information element"}
                                    addNew={true}
                                    onClick={e => {
                                        handleMenuClick(
                                            e,
                                            "information-element"
                                        );
                                    }}
                                />

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
                                    <span
                                        className="d-flex align-items-start justify-content-center text-muted"
                                        style={{
                                            margin: "14px 0",
                                            fontSize: "14px",
                                            width: "100%"
                                        }}
                                    >
                                        No information elements
                                    </span>
                                ) : (
                                    <>
                                        {informationElement.informationElements.map(
                                            ie => (
                                                <Card
                                                    id={`card-${ie.id}`}
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
    relationship: state.relationship,
    help: state.help.help,
    viz: state.viz,
    type: state.modal.type
});

export default connect(mapSateToProps, {
    getApplications,
    setApplication,
    setFocused,
    removeFocused,
    toggleHelp,
    toggleModal
})(Home);
