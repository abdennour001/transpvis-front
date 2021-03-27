import axios from "axios";

import { GET_INFORMATION_ELEMENTS, TOGGLE_LOADING_INFORMATION_ELEMENTS } from "../types";
import { environment } from "../../utils/environment";

// Get information elements
export const getInformationElements = (params = {}) => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "information-elements/", {params:{...params}});

        dispatch({
            type: GET_INFORMATION_ELEMENTS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error get information elements: ", error);
    }
};
