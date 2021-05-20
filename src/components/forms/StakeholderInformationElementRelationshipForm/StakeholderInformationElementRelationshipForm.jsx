import React, { useState } from "react";
import { connect } from "react-redux";

import "./_stakeholderinformationelementrelationshipform.scss";

import { toggleModal } from "../../../redux/actions/modalActions";
import { addStakeholderInformationElementRelation } from "../../../redux/actions/relationsActions";

const StakeholderInformationElementRelationshipForm = ({
    focused,
    relation,
    informationElements,
    stakeholders,
    toggleModal,
    addStakeholderInformationElementRelation
}) => {
    const [ie, setIe] = useState(informationElements[0]?.id);
    const [stakeholder, setStakeholder] = useState(stakeholders[0]?.id);

    const renderTitle = type => {
        if (type === "s") {
            switch (relation) {
                case "production":
                    return "Add new providing stakeholder";
                case "obligatory":
                    return "add new recieving stakeholder";
                case "optional":
                    return "Add new requesting stakeholder";
                case "restricted":
                    return "Add new restricted stakeholder";
                default:
                    break;
            }
        } else {
            switch (relation) {
                case "production":
                    return "Add new produced Information element";
                case "obligatory":
                    return "Add new obligatory relationship";
                case "optional":
                    return "Add new optional relationship";
                case "restricted":
                    return "Add new restricted relationship";
                case "undecided":
                    return "Add new undecided relationship";
                default:
                    break;
            }
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (focused?.label.includes("S")) {
            addStakeholderInformationElementRelation({
                type: relation,
                information_element: ie,
                stakeholder: focused.id,
                s: true
            });
        } else {
            addStakeholderInformationElementRelation({
                type: relation,
                information_element: focused.id,
                stakeholder: stakeholder,
                s: false
            });
        }

        toggleModal();
    };
    return (
        <form className="form-modal" onSubmit={handleSubmit}>
            {focused?.label.includes("S") ? (
                <>
                    <h3>{renderTitle("ie")}</h3>
                    <div className="form-group">
                        <span className="form-label-req">
                            Information element*
                        </span>
                        <select
                            value={ie}
                            onChange={e => {
                                setIe(e.target.value);
                            }}
                            className="form-control"
                        >
                            {informationElements.map(ie => (
                                <option key={ie.id} value={ie.id}>
                                    {ie.name}
                                </option>
                            ))}
                        </select>
                        <span className="form-tip">
                            Stakeholder - Information element relationship can
                            take 5 main forms: <b>Production</b>,{" "}
                            <b>Optional</b>, <b>Obligatory</b>,{" "}
                            <b>Restricted</b> or <b>Undecided</b>.
                        </span>
                    </div>
                </>
            ) : (
                <>
                    <h3>{renderTitle("s")}</h3>
                    <div className="form-group">
                        <span className="form-label-req">Stakeholder*</span>
                        <select
                            value={stakeholder}
                            onChange={e => {
                                setStakeholder(e.target.value);
                            }}
                            className="form-control"
                        >
                            {stakeholders.map(s => (
                                <option key={s.id} value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                        <span className="form-tip">
                            Stakeholder - Information element relationship can
                            take 5 main forms: <b>Production</b>,{" "}
                            <b>Optional</b>, <b>Obligatory</b>,{" "}
                            <b>Restricted</b> or <b>Undecided</b>.
                        </span>
                    </div>
                </>
            )}
            <button type="submit" className="form-submit">
                Add
            </button>
        </form>
    );
};

const mapStateToProps = state => ({
    focused: state.application.focused,
    relation: state.modal.relation,
    informationElements: state.informationElement.informationElements,
    stakeholders: state.stakeholder.stakeholders
});

export default connect(mapStateToProps, {
    toggleModal,
    addStakeholderInformationElementRelation
})(StakeholderInformationElementRelationshipForm);
