import axios from "axios";

import { GET_APPLICATIONS, SET_APPLICATION } from "../types";
import { environment } from "../../utils/environment";

// Get applications
export const getApplications = (params = {}) => async dispatch => {
    try {
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "applications/", {
            params: { ...params }
        });

        dispatch({
            type: GET_APPLICATIONS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error get application: ", error);
    }
};

// Set application
export const setApplication = appId => async dispatch => {
    dispatch({
        type: SET_APPLICATION,
        payload: appId
    });
};
