import axios from "axios";

import {
    GET_RELATIONS,
    TOGGLE_LOADING_RELATIONS,
    ADD_STAKEHOLDER_INFORMATION_ELEMENT_RELATION,
    REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX,
    REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION
} from "../types";
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

// Add relation
export const addStakeholderInformationElementRelation = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_RELATIONS });
        const s = formData.s;
        delete formData.s;
        const url = environment.apiEndpoint;
        const res = await axios.post(
            url + `stakeholder-information-relationships/`,
            formData,
            config
        );
        dispatch({
            type: ADD_STAKEHOLDER_INFORMATION_ELEMENT_RELATION,
            payload: res.data
        });
        if (s) {
            document
                .getElementById(
                    "card-relation-" +
                        formData.type +
                        "-" +
                        res.data.information_element
                )
                .classList.add("card-highlight");
        } else {
            document
                .getElementById(
                    "card-relation-" +
                        formData.type +
                        "-" +
                        res.data.stakeholder
                )
                .classList.add("card-highlight");
        }
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_RELATIONS });
        console.error(
            "Error adding stakeholder information element relation: ",
            error
        );
    }
};

// Remove relation from the backend
export const removeStakeholderInformationElementRelation = id => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        dispatch({ type: TOGGLE_LOADING_RELATIONS });
        const url = environment.apiEndpoint;
        const res = await axios.delete(
            url + `stakeholder-information-relationships/${id}/`,
            config
        );
        dispatch({
            type: REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION,
            payload: { id }
        });
    } catch (error) {
        dispatch({ type: TOGGLE_LOADING_RELATIONS });
        console.error(
            "Error removing stakeholder information element relation: ",
            error
        );
    }
};

// Remove relation from state
export const removeStakeholderInformationElementRelationFromRedux = (
    type,
    id
) => async dispatch => {
    dispatch({
        type: REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX,
        payload: { type, id }
    });
};
