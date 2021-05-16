import React from "react";
import { connect } from "react-redux";

import "./_informationelementassociationform.scss";

const InformationElementAssociationForm = ({ informationElements }) => {
    return (
        <form className="form-modal">
            <h3>New Information element Association</h3>
            <div className="form-group">
                <span className="form-label-req">Target*</span>
                <select className="form-control">
                    {informationElements.map(ie => (
                        <option value={ie.id}>{ie.name}</option>
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
    informationElements: state.informationElement.informationElements
});

export default connect(mapStateToProps)(InformationElementAssociationForm);
