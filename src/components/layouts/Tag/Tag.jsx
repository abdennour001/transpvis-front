import React from "react";
import Skeleton from "react-loading-skeleton";

import "./_tag.scss";

const Tag = ({ content, color, isLoading }) => {
    if (isLoading) {
        return (
            <div className="tag">
                <span>
                    <Skeleton count={1} height={18} width={26} />
                </span>
            </div>
        );
    }

    return (
        <div className="tag" style={{ backgroundColor: color }}>
            <span>{content}</span>
        </div>
    );
};

export default Tag;
