import { GET_RELATIONS, TOGGLE_LOADING_RELATIONS } from "../types";

const initialState = {
    relations: null,
    loading: false
};

const relationshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RELATIONS:
            return { ...state, relations: action.payload, loading: false };
        case TOGGLE_LOADING_RELATIONS:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default relationshipReducer;
