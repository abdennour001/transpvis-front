export const handleTipPosition = event => {
    const elementRect = event.target.getBoundingClientRect();
    const tipWrapper = event.target.getElementsByClassName(
        "tooltip__wrapper"
    )[0];

    if (tipWrapper) {
        tipWrapper.style.top = `${elementRect.y + 2}    px`;
        tipWrapper.style.left = 0;
        tipWrapper.style.right = "auto";
        tipWrapper.style.transform = `translate(${elementRect.x}px, 0)`;

        if (event.target.getAttribute("data-tip") === "0") {
            tipWrapper.style.top = `${30}px`;
        }

        if (elementRect.x + 20 + 250 > window.outerWidth) {
            tipWrapper.style.transform = `translate(${elementRect.x -
                (elementRect.x + 250 - window.outerWidth) -
                20}px, 0)`;
        }
    }
};
