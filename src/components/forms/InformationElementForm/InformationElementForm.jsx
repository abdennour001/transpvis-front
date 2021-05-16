import React from "react";

import "./_informationelementform.scss";

const InformationElementForm = () => {
    return (
        <form className="form-modal">
            <h3>New Information element</h3>
            <div className="form-group">
                <span className="form-label-req">Name*</span>
                <input
                    type="text"
                    placeholder="ex. Personal Information"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <span className="form-label-req">Type*</span>
                <select className="form-control">
                    <option value="data">Data</option>
                    <option value="process">Process</option>
                    <option value="policy">Policy</option>
                </select>
            </div>
            <div className="form-group">
                <span className="form-label">Description</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add a brief description about the Information element here..."
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

export default InformationElementForm;
