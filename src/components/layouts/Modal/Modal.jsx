import React from "react";
import { connect } from "react-redux";

import "./_modal.scss";
import { toggleModal } from "../../../redux/actions/modalActions";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ opened, toggleModal, children }) => {
    const handleOutsideClick = event => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            toggleModal();
        }
    };
    return (
        <div
            className={`modal${opened ? "" : "-hidden"}`}
            onClick={handleOutsideClick}
        >
            <div className="modal__menu">
                <div className="modal__content">
                    <div className="modal__exit">
                        <FontAwesomeIcon
                            onClick={() => {
                                toggleModal();
                            }}
                            icon={faTimes}
                            size="md"
                            onClick={e => {
                                toggleModal();
                            }}
                        />
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    opened: state.modal.opened
});

export default connect(mapStateToProps, { toggleModal })(Modal);
