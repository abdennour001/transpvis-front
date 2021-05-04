import { SET_JSON_DATA, SET_ROOT } from "../types";

// Set json data
export const setJsonData = jsonData => async dispatch => {
    dispatch({
        type: SET_JSON_DATA,
        payload: jsonData
    });
};

// Set root
export const setRoot = (root, dispatch) => {
    dispatch({
        type: SET_ROOT,
        payload: root
    });
};
