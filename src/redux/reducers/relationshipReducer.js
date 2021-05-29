import {
    GET_RELATIONS,
    TOGGLE_LOADING_RELATIONS,
    ADD_STAKEHOLDER_INFORMATION_ELEMENT_RELATION,
    REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX,
    REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION
} from "../types";

const initialState = {
    relations: [],
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
        case REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION_FROM_REDUX:
            return {
                ...state,
                loading: false,
                relations: state.relations.filter(r =>
                    action.payload.type === "s"
                        ? r.stakeholder !== +action.payload.id
                        : r.information_element !== +action.payload.id
                )
            };
        case REMOVE_STAKEHOLDER_INFORMATION_ELEMENT_RELATION:
            return {
                ...state,
                loading: false,
                relations: state.relations.filter(
                    r => r.id !== +action.payload.id
                )
            };
        default:
            return state;
    }
};

export default relationshipReducer;
