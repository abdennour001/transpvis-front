import {
    GET_RELATIONS,
    TOGGLE_LOADING_RELATIONS,
    ADD_STAKEHOLDER_INFORMATION_ELEMENT_RELATION
} from "../types";

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
        case ADD_STAKEHOLDER_INFORMATION_ELEMENT_RELATION:
            return {
                ...state,
                loading: false,
                relations: [...state.relations, action.payload]
            };
        default:
            return state;
    }
};

export default relationshipReducer;
