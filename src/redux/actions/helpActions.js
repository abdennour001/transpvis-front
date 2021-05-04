
import { TOGGLE_HELP } from "../types";
import { handleTipPosition } from "../../utils/app.utils";

// toggle help
export const toggleHelp = () => async dispatch => {
    if (document.getElementsByTagName("body")[0].style.cursor !== "help") {
        document.getElementsByTagName("body")[0].style.cursor = "help"
    } else {
        document.getElementsByTagName("body")[0].style.cursor = "auto"
    }
    document.querySelectorAll("[data-tip]").forEach((element) => {
        element.removeEventListener("mouseenter", handleTipPosition);
    });
    dispatch({ type: TOGGLE_HELP });
};