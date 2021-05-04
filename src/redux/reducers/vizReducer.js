import { SET_JSON_DATA, SET_ROOT } from "../types";

const initialState = {
    jsonData: {},
    root: {}
};

const vizReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JSON_DATA:
            return { ...state, jsonData: action.payload };
        case SET_ROOT:
            return { ...state, root: action.payload };
        default:
            return state;
    }
};

export default vizReducer;
