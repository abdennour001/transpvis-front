import React from "react";

import "./_control.scss";

import Tag from "../Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Control = () => {
    return (
        <>
            <div className="control">
                <div className="control__header">
                    <div className="control__left">
                        <h2>Amazon Web Services</h2>
                    </div>
                    <div className="control__right">
                        {/* <FontAwesomeIcon
                            icon={faInfo}
                            fixedWidth
                            size="sm"
                        />
                        <a href="">read transparency note</a> */}
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Stakeholders
                            </p>
                            <Tag content="3" color="#3d4659" />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Policy
                            </p>
                            <Tag content="2" color="#3d4659" />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Process
                            </p>
                            <Tag content="3" color="#3d4659" />
                        </div>
                        <div className="control__info">
                            <p
                                style={{
                                    margin: "0",
                                    marginTop: "-1px"
                                }}
                            >
                                Data
                            </p>
                            <Tag content="4" color="#3d4659" />
                        </div>
                    </div>
                </div>
                <div className="control__bottom">
                    <p>✏️ Control here ...</p>
                </div>
            </div>
        </>
    );
};

export default Control;
