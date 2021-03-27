import { GET_STAKEHOLDERS, SET_LOADING_STAKEHOLDERS } from "../types";

const initialState = {
    stakeholders: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_STAKEHOLDERS:
            return { ...state, stakeholders: action.payload, loading: false };
        case SET_LOADING_STAKEHOLDERS:
            return { ...state, loading: true };
        default:
            return state;
    }
};
