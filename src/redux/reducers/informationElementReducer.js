import {
    GET_INFORMATION_ELEMENTS,
    TOGGLE_LOADING_INFORMATION_ELEMENTS
} from "../types";

const initialState = {
    informationElements: null,
    loading: false
};

const informationElementReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFORMATION_ELEMENTS:
            return {
                ...state,
                informationElements: action.payload,
                loading: false
            };
        case TOGGLE_LOADING_INFORMATION_ELEMENTS:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default informationElementReducer;
