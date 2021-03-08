import { React, useEffect, useRef } from "react";

import "./_detail.scss";

const Detail = ({ type, data }) => {
    const afterRef = useRef(null);

    useEffect(() => {
        afterRef.current.setAttribute(
            "style",
            "--tooltip-type-color: #4A6FA5;"
        );
    }, []);

    return (
        <>
            <div className="detail">
                <div className="detail__card">
                    <div className="detail__title">
                        <h2>Customers</h2>
                        <span>01</span>
                    </div>
                    <div className="detail__info">
                        <div className="detail__type">
                            <p ref={afterRef}>Stakeholder</p>
                        </div>
                        <p className="detail__description">
                            We created this introduction notebook to guide you
                            through your first steps in exploring and
                            visualizing data with Observable. It’s all yours to
                            edit, tinker with, and return to as needed.
                        </p>
                    </div>
                </div>
                <div className="detail__other">
                    <p>Other info...</p>
                </div>
            </div>
        </>
    );
};

export default Detail;
