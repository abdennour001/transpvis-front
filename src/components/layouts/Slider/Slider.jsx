import React from "react";

import "./_slider.scss";

const Slider = ({ min, max, value, step, onChange }) => {
    return (
        <div className="slider">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                step={step}
                className="slider__slider"
            />
        </div>
    );
};

export default Slider;
