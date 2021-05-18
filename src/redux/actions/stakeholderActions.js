import axios from "axios";

import {
    GET_STAKEHOLDERS,
    TOGGLE_LOADING_STAKEHOLDERS,
    CREATE_STAKEHOLDER,
    UPDATE_STAKEHOLDER,
    DELETE_STAKEHOLDER
} from "../types";
import { environment } from "../../utils/environment";

// Get stakeholders
export const getStakeholders = (params = {}) => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "stakeholders/", {
            params: { ...params }
        });

        dispatch({
            type: GET_STAKEHOLDERS,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        console.error("Error get stakeholders: ", error);
    }
};

// Create a stakeholder
export const createStakeholder = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        const url = environment.apiEndpoint;
        const res = await axios.post(url + "stakeholders/", formData, config);
        dispatch({ type: CREATE_STAKEHOLDER, payload: res.data });
        document
            .getElementById("card-" + res.data.id)
            .classList.add("card-highlight");
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        console.error("Error create stakeholder: ", error);
    }
};

// Update a stakeholder
export const updateStakeholder = id => formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        const url = environment.apiEndpoint;
        const res = await axios.patch(
            url + `stakeholders/${id}`,
            formData,
            config
        );
        dispatch({ type: UPDATE_STAKEHOLDER, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        console.error("Error updating stakeholder: ", error);
    }
};

// Delete a stakeholder
export const deleteStakeholder = id => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        const url = environment.apiEndpoint;
        const res = await axios.delete(url + `stakeholders/${id}`);
        dispatch({ type: DELETE_STAKEHOLDER, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_STAKEHOLDERS });
        console.error("Error create stakeholder: ", error);
    }
};
