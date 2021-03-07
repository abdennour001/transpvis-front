import React from "react";

import "./_tag.scss";

const Tag = ({ content, color }) => {
    return (
        <div className="tag" style={{ backgroundColor: color }}>
            <span>{content}</span>
        </div>
    );
};

export default Tag;
