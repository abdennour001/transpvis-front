import React, { useState } from "react";
import { connect } from "react-redux";

import "./_informationelementassociationform.scss";
import { toggleModal } from "../../../redux/actions/modalActions";
import { addInformationElementAssociation } from "../../../redux/actions/informationElementsActions";

const InformationElementAssociationForm = ({
    focused,
    informationElements,
    toggleModal,
    addInformationElementAssociation
}) => {
    const [ie, setIe] = useState(informationElements[0]?.id);

    const handleSubmit = e => {
        e.preventDefault();
        addInformationElementAssociation(focused.id, ie);
        toggleModal();
    };
    return (
        <form className="form-modal" onSubmit={handleSubmit}>
            <h3>New Information element Association</h3>
            <div className="form-group">
                <span className="form-label-req">Target*</span>
                <select
                    className="form-control"
                    value={ie}
                    onChange={e => {
                        setIe(e.target.value);
                    }}
                >
                    {informationElements.map(ie => (
                        <option key={ie.id} value={ie.id}>
                            {ie.name}
                        </option>
                    ))}
                </select>
                <span className="form-tip">
                    Target is the Information element that uses the source
                    Information element, ex. source is PI and target is Security
                    of PI.
                </span>
            </div>
            <button type="submit" className="form-submit">
                Add
            </button>
        </form>
    );
};

const mapStateToProps = state => ({
    focused: state.application.focused,
    informationElements: state.informationElement.informationElements
});

export default connect(mapStateToProps, {
    toggleModal,
    addInformationElementAssociation
})(InformationElementAssociationForm);
