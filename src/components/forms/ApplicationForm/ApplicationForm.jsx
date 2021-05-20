import React, { useState } from "react";
import { connect } from "react-redux";

import "./_applicationform.scss";
import { toggleModal } from "../../../redux/actions/modalActions";
import { createApplication } from "../../../redux/actions/applicationActions";

const ApplicationForm = ({ user, toggleModal, createApplication }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        createApplication({
            name,
            description,
            transparency_note: note,
            user: user?.id
        });
        toggleModal();
    };
    return (
        <form className="form-modal" onSubmit={handleSubmit}>
            <h3>New Application</h3>
            <div className="form-group">
                <span className="form-label-req">Name*</span>
                <input
                    type="text"
                    placeholder="ex. Amazon Web Services (AWS)"
                    className="form-control"
                    value={name}
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    required
                />
            </div>
            <div className="form-group">
                <span className="form-label">Description</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add a brief description about the application here..."
                    value={description}
                    onChange={e => {
                        setDescription(e.target.value);
                    }}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <span className="form-label">Transparency note</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add trancparency note..."
                    value={note}
                    onChange={e => {
                        setNote(e.target.value);
                    }}
                    className="form-control"
                />
            </div>
            <input type="submit" className="form-submit" value="Create" />
        </form>
    );
};

const mapSateToProps = state => ({
    user: state.auth.user
});

export default connect(mapSateToProps, { toggleModal, createApplication })(
    ApplicationForm
);
