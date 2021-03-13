import { React, useEffect, useRef, useState } from "react";

import Stakeholder from "../Stakeholder";
import InformationElement from "../InformationElement";
import "./_detail.scss";

const Detail = ({ type, data }) => {
    return (
        <>
            <div className="detail">
                {type === "stakeholder" && (
                    <>
                        <Stakeholder data={data} />
                    </>
                )}

                {type == "information_element" && (
                    <>
                        <InformationElement data={data} />
                    </>
                )}
            </div>
        </>
    );
};

export default Detail;
