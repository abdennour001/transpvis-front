import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "./_splash.scss";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../../layouts/Header";
import { toggleModal } from "../../../redux/actions/modalActions";
import {
    setApplication,
    getApplications
} from "../../../redux/actions/applicationActions";
import { getStakeholders } from "../../../redux/actions/stakeholderActions";
import { getInformationElements } from "../../../redux/actions/informationElementsActions";
import { getRelationships } from "../../../redux/actions/relationsActions";
import ApplicationForm from "../../forms/ApplicationForm";
import Modal from "../../layouts/Modal";

const Splash = ({
    applications,
    toggleModal,
    setApplication,
    getApplications,
    getStakeholders,
    getInformationElements,
    getRelationships
}) => {
    const history = useHistory();

    useEffect(() => {
        getApplications();
    }, []);

    const handleMenuClick = e => {
        toggleModal();
    };

    const handleAppClick = (e, app) => {
        e.preventDefault();
        setApplication(app);
        getStakeholders({ application: app });
        getInformationElements({ application: app });
        getRelationships({ stakeholder__application: app }).then(() => {
            history.push("/");
        });
    };

    return (
        <>
            <Modal>
                <ApplicationForm />
            </Modal>

            <Header></Header>
            <div className="splash">
                <div className="splash__container">
                    <h2>Please choose an application to start</h2>
                    <div className="splash__app_list">
                        <div
                            className="splash__app"
                            title="Add new application"
                            onClick={e => {
                                handleMenuClick(e);
                            }}
                        >
                            <p>
                                <FontAwesomeIcon icon={faPlus} size="lg" />
                            </p>
                        </div>
                        {applications?.map(app => (
                            <div
                                className="splash__app"
                                title={app.name}
                                onClick={e => {
                                    handleAppClick(e, app.id);
                                }}
                                key={app.id}
                            >
                                <h4>{app.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const mapSateToProps = state => ({
    applications: state.application.applications
});

export default connect(mapSateToProps, {
    toggleModal,
    setApplication,
    getApplications,
    getStakeholders,
    getInformationElements,
    getRelationships
})(Splash);
