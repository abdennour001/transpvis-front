import axios from "axios";

import {
    GET_APPLICATIONS,
    SET_APPLICATION,
    SET_FOCUSED,
    REMOVE_FOCUSED,
    TOGGLE_LOADING_APPLICATION,
    CREATE_APPLICATION,
    UPDATE_APPLICATION,
    DELETE_APPLICATION
} from "../types";
import { environment } from "../../utils/environment";

// Get applications
export const getApplications = (params = {}) => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "applications/", {
            params: { ...params }
        });

        dispatch({
            type: GET_APPLICATIONS,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        console.error("Error get application: ", error);
    }
};

// Create an application
export const createApplication = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        const url = environment.apiEndpoint;
        const res = await axios.post(url + "applications/", formData, config);
        dispatch({ type: CREATE_APPLICATION, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        console.error("Error create application: ", error);
    }
};

// Update an application
export const updateApplication = appId => formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        const url = environment.apiEndpoint;
        const res = await axios.patch(
            url + `applications/${appId}`,
            formData,
            config
        );
        dispatch({ type: UPDATE_APPLICATION, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        console.error("Error updating application: ", error);
    }
};

// Delete an application
export const deleteApplication = appId => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        const url = environment.apiEndpoint;
        const res = await axios.delete(url + `applications/${appId}`, config);
        dispatch({ type: DELETE_APPLICATION, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_APPLICATION });
        console.error("Error deleting application: ", error);
    }
};

// Set application
export const setApplication = appId => async dispatch => {
    dispatch({
        type: SET_APPLICATION,
        payload: appId
    });
};

// Set focused
export const setFocused = element => async dispatch => {
    dispatch({
        type: SET_FOCUSED,
        payload: element
    });
};

// Remove focused
export const removeFocused = () => async dispatch => {
    dispatch({
        type: REMOVE_FOCUSED
    });
};
