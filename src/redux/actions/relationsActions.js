import axios from "axios";

import { GET_RELATIONS, TOGGLE_LOADING_RELATIONS } from "../types";
import { environment } from "../../utils/environment";

// Get relationships
export const getRelationships = (params = {}) => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_RELATIONS });
        const url = environment.apiEndpoint;
        const res = await axios.get(
            url + "stakeholder-information-relationships/",
            { params: { ...params } }
        );

        dispatch({
            type: GET_RELATIONS,
            payload: res.data
        });
    } catch (error) {
        console.error(
            "Error get stakeholders information elements relationships: ",
            error
        );
    }
};
