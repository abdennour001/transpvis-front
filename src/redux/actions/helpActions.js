
import { TOGGLE_HELP } from "../types";

// toggle help
export const toggleHelp = () => async dispatch => {
    if (document.getElementsByTagName("body")[0].style.cursor !== "help") {
        document.getElementsByTagName("body")[0].style.cursor = "help"
    } else {
        document.getElementsByTagName("body")[0].style.cursor = "auto"
    }
    dispatch({ type: TOGGLE_HELP });
};