import { GET_INFORMATION_ELEMENTS, SET_LOADING_INFORMATION_ELEMENTS } from "../types";

const initialState = {
    information_elements: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INFORMATION_ELEMENTS:
            return { ...state, information_elements: action.payload, loading: false };
        case SET_LOADING_INFORMATION_ELEMENTS:
            return { ...state, loading: true };
        default:
            return state;
    }
};
