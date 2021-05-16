import React from "react";

import "./_applicationform.scss";

const ApplicationForm = () => {
    return (
        <form className="form-modal">
            <h3>New Application</h3>
            <div className="form-group">
                <span className="form-label-req">Name*</span>
                <input
                    type="text"
                    placeholder="ex. Amazon Web Services (AWS)"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <span className="form-label">Description</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add a brief description about the application here..."
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <span className="form-label">Transparency note</span>
                <textarea
                    cols="30"
                    rows="4"
                    placeholder="Add trancparency note..."
                    className="form-control"
                />
            </div>
            <button type="submit" className="form-submit">
                Add
            </button>
        </form>
    );
};

export default ApplicationForm;
