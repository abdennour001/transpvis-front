import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { faPlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./_card.scss";

const Card = ({
    label,
    name,
    color,
    onClick,
    isLoading,
    focused,
    addNew,
    title
}) => {
    const handleMenuClick = event => {
        event.preventDefault();
        event.stopPropagation();
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
            <div className="card__menu" onClick={e => handleMenuClick(e)}>
                <FontAwesomeIcon icon={faEllipsisH} size="sm" />
            </div>
        </div>
    );
};

const mapSateToProps = state => ({
    focused: state.application.focused
});

export default connect(mapSateToProps)(Card);
