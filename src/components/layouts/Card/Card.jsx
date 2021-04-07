import React from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

import "./_card.scss";

const Card = ({ label, name, color, onClick, isLoading, focused }) => {
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
        </div>
    );
};

const mapSateToProps = state => ({
    focused: state.application.focused
});

export default connect(mapSateToProps)(Card);
