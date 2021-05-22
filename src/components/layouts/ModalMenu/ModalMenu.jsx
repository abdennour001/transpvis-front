import React from "react";

import "./_modalmenu.scss";

const ModalMenu = () => {
    return (
        <form className="form-modal">
            <div className="button-group">
                <button className="form-submit" style={{ width: "100%" }}>
                    Update
                </button>
                <button className="form-submit button-red" style={{ width: "100%" }}>
                    Delete
                </button>
            </div>
        </form>
    );
};

export default ModalMenu;
