import axios from "axios";

import {
    GET_INFORMATION_ELEMENTS,
    TOGGLE_LOADING_INFORMATION_ELEMENTS,
    CREATE_INFORMATION_ELEMENT,
    UPDATE_INFORMATION_ELEMENT,
    DELETE_INFORMATION_ELEMENT,
    ADD_INFORMATION_ELEMENT_ASSOCIATION
} from "../types";
import { environment } from "../../utils/environment";

// Get information elements
export const getInformationElements = (params = {}) => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.get(url + "information-elements/", {
            params: { ...params }
        });

        dispatch({
            type: GET_INFORMATION_ELEMENTS,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error get information elements: ", error);
    }
};

// Create an information element
export const createInformationElement = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.post(
            url + "information-elements/",
            formData,
            config
        );
        dispatch({ type: CREATE_INFORMATION_ELEMENT, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error create information element: ", error);
    }
};

// Update a stakeholder
export const updateInformationElement = id => formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.patch(
            url + `information-elements/${id}`,
            formData,
            config
        );
        dispatch({ type: UPDATE_INFORMATION_ELEMENT, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error updating information element: ", error);
    }
};

// Delete a stakeholder
export const deleteInformationElement = id => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.delete(url + `information-elements/${id}`);
        dispatch({ type: DELETE_INFORMATION_ELEMENT, payload: res.data });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error deleting information element: ", error);
    }
};

// Add information element association
export const addInformationElementAssociation = source => target => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.post(
            url + `information-element-associations/`,
            { source, target },
            config
        );
        dispatch({
            type: ADD_INFORMATION_ELEMENT_ASSOCIATION,
            payload: res.data
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error adding information element association: ", error);
    }
};
