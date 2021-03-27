import axios from "axios";

import { GET_STAKEHOLDERS, SET_LOADING_STAKEHOLDERS } from "../types";
import { environment } from "../../utils/environment";

// Get stakeholders
export const getStakeholders = (params = {}) => async dispatch => {
    try {
        dispatch({ type: SET_LOADING_STAKEHOLDERS });
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "stakeholders/", {params:{...params}});

        dispatch({
            type: GET_STAKEHOLDERS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error getting stakeholders: ", error);
    }
};
