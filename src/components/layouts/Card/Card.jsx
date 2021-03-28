import React from "react";

import "./_card.scss";

const Card = ({ label, name, color, onClick }) => {
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
