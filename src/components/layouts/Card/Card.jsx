import React from "react";
import Skeleton from "react-loading-skeleton";

import "./_card.scss";

const Card = ({ label, name, color, onClick, isLoading }) => {
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
        <div className="card" onClick={onClick}>
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

export default Card;
