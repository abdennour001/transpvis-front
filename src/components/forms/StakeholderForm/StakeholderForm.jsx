import React, { useState } from "react";
import { connect } from "react-redux";

import "./_stakeholderform.scss";

import { toggleModal } from "../../../redux/actions/modalActions";
import { createStakeholder } from "../../../redux/actions/stakeholderActions";

const StakeholderForm = ({ application, toggleModal, createStakeholder }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        createStakeholder({
            name,
            description,
            weight,
            application: application.id
        });
        toggleModal();
    };
    return (
        <form className="form-modal" onSubmit={handleSubmit}>
            <h3>New stakeholder</h3>
            <div className="form-group">
                <span className="form-label-req">Name*</span>
                <input
                    type="text"
                    placeholder="ex. Customers"
                    className="form-control"
                    value={name}
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    autoFocus
                />
            </div>
            <div className="form-group">
                <span className="form-label">Description</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add a brief description about the stakeholder here..."
                    className="form-control"
                    value={description}
                    onChange={e => {
                        setDescription(e.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <span className="form-label">Weight</span>
                <input
                    type="number"
                    min="0"
                    max="1"
                    value="1"
                    className="form-control"
                    value={weight}
                    onChange={e => {
                        setWeight(e.target.value);
                    }}
                />
            </div>
            <button type="submit" className="form-submit">
                Add
            </button>
        </form>
    );
};

const mapSateToProps = state => ({
    application: state.application.application
});

export default connect(mapSateToProps, { toggleModal, createStakeholder })(
    StakeholderForm
);
