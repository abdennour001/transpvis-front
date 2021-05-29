import axios from "axios";

import {
    GET_INFORMATION_ELEMENTS,
    TOGGLE_LOADING_INFORMATION_ELEMENTS,
    CREATE_INFORMATION_ELEMENT,
    UPDATE_INFORMATION_ELEMENT,
    DELETE_INFORMATION_ELEMENT,
    ADD_INFORMATION_ELEMENT_ASSOCIATION,
    SET_FOCUSED,
    REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX,
    REMOVE_FOCUSED,
    REMOVE_INFORMATION_ELEMENT_ASSOCIATION
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
        document
            .getElementById("card-" + res.data.id)
            .classList.add("card-highlight");
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error create information element: ", error);
    }
};

// Update a stakeholder
export const updateInformationElement = (id, formData) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const res = await axios.patch(
            url + `information-elements/${id}/`,
            formData,
            config
        );
        dispatch({
            type: SET_FOCUSED,
            payload: res.data
        });
        dispatch({ type: UPDATE_INFORMATION_ELEMENT, payload: res.data });
        document
            .getElementById("card-" + res.data.id)
            .classList.add("card-highlight");
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error updating information element: ", error);
    }
};

// Delete a stakeholder
export const deleteInformationElement = id => async dispatch => {
    try {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        dispatch({ type: REMOVE_FOCUSED });
        dispatch({
            type: REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX,
            payload: { type: "i", id }
        });
        const url = environment.apiEndpoint;
        const res = await axios.delete(url + `information-elements/${id}/`);
        dispatch({ type: DELETE_INFORMATION_ELEMENT, payload: { id } });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error deleting information element: ", error);
    }
};

// Add information element association
export const addInformationElementAssociation = (
    source,
    target
) => async dispatch => {
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
        document
            .getElementById("card-association-" + res.data.target)
            .classList.add("card-highlight");
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error adding information element association: ", error);
    }
};

// Remove information element association
export const removeInformationElementAssociation = (
    source,
    target
) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        console.log(source, target);
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        const url = environment.apiEndpoint;
        const formData = { data: { source: +source, target: +target } };
        const res = await axios.delete(
            url + `information-element-associations/`,
            formData,
            config
        );
        dispatch({
            type: REMOVE_INFORMATION_ELEMENT_ASSOCIATION,
            payload: { source, target }
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_INFORMATION_ELEMENTS });
        console.error("Error removing information element ass: ", error);
    }
};
