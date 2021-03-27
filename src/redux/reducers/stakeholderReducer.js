import { GET_STAKEHOLDERS, TOGGLE_LOADING_STAKEHOLDERS } from "../types";

const initialState = {
    stakeholders: null,
    loading: false
};

const stakeholderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAKEHOLDERS:
            return { ...state, stakeholders: action.payload, loading: false };
        case TOGGLE_LOADING_STAKEHOLDERS:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default stakeholderReducer;
