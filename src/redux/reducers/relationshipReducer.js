import { GET_RELATIONS, SET_LOADING_RELATIONS } from "../types";

const initialState = {
    relations: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATIONS:
            return { ...state, relations: action.payload, loading: false };
        case SET_LOADING_RELATIONS:
            return { ...state, loading: true };
        default:
            return state;
    }
};
