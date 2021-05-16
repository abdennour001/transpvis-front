import React from "react";

import "./_stakeholderform.scss";

const StakeholderForm = () => {
    return (
        <form className="form-modal">
            <h3>New stakeholder</h3>
            <div className="form-group">
                <span className="form-label-req">Name*</span>
                <input
                    type="text"
                    placeholder="ex. Customers"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <span className="form-label">Description</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add a brief description about the stakeholder here..."
                    className="form-control"
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
                />
            </div>
            <button type="submit" className="form-submit">
                Add
            </button>
        </form>
    );
};

export default StakeholderForm;
