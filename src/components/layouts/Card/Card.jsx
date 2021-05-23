import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./_card.scss";
import { deleteInformationElement } from "../../../redux/actions/informationElementsActions";
import { deleteStakeholder } from "../../../redux/actions/stakeholderActions";

const Card = ({
    id,
    label,
    name,
    color,
    onClick,
    isLoading,
    focused,
    addNew,
    title,
    deleteInformationElement,
    deleteStakeholder
}) => {
    const handleDelete = event => {
        event.preventDefault();
        event.stopPropagation();
        if (window.confirm("Are you sure you want to delete this element?")) {
            if (id.includes("relation")) {

            } else if (id.includes("association")) {
                
            } else {
                if (label.includes("S")) {
                    deleteStakeholder(id.replace("card-", ""));
                } else {
                    deleteInformationElement(id.replace("card-", ""));
                }
            }
        }
    };

    if (addNew) {
        return (
            <div className="card" title={title} onClick={onClick}>
                <div className="card__icon">
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="card">
                <span className="card__indicator">
                    <Skeleton count={1} height={14} width={14} circle={true} />
                </span>
                <div className="card__main">
                    <div className="card__label">
                        <Skeleton count={1} height={14} width={34} />
                    </div>
                    <div className="card__content">
                        <Skeleton count={1} height={18} width={250} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            id={id}
            className={
                "card " +
                (focused?.label === label
                    ? `card-focused-${
                          focused?.label.includes("S")
                              ? "stakeholder"
                              : `${focused?.type}`
                      }`
                    : "")
            }
            onClick={onClick}
        >
            <span
                className="card__indicator"
                style={{ background: color }}
            ></span>

            <div className="card__main">
                <div className="card__label">
                    <span>{label}</span>
                </div>
                <div className="card__content">
                    <h4 className="card__name">{name}</h4>
                </div>
            </div>
            <div
                className="card__menu"
                onClick={e => handleDelete(e)}
                title="Delete"
            >
                <FontAwesomeIcon icon={faTrash} size="sm" />
            </div>
        </div>
    );
};

const mapSateToProps = state => ({
    focused: state.application.focused
});

export default connect(mapSateToProps, {
    deleteInformationElement,
    deleteStakeholder
})(Card);
