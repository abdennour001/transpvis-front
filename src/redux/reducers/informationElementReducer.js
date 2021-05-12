import {
    GET_INFORMATION_ELEMENTS,
    TOGGLE_LOADING_INFORMATION_ELEMENTS,
    CREATE_INFORMATION_ELEMENT,
    ADD_INFORMATION_ELEMENT_ASSOCIATION,
    DELETE_INFORMATION_ELEMENT,
    UPDATE_INFORMATION_ELEMENT
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
        case CREATE_INFORMATION_ELEMENT:
            return {
                ...state,
                loading: false,
                informationElements: [
                    ...state.informationElements,
                    action.payload
                ]
            };
        case UPDATE_INFORMATION_ELEMENT:
            return {
                ...state,
                loading: false,
                informationElements: [
                    ...state.informationElements.filter(
                        s => s.id !== action.payload.id
                    ),
                    action.payload
                ]
            };
        case DELETE_INFORMATION_ELEMENT:
            return {
                ...state,
                loading: false,
                informationElements: state.informationElements.filter(
                    e => e.id !== action.payload.id
                )
            };
        case ADD_INFORMATION_ELEMENT_ASSOCIATION:
            let newSource = state.informationElements.find(
                e => e.id !== action.payload.source
            );
            newSource.information_elements.concat(action.payload.target);
            return {
                ...state,
                loading: false,
                informationElements: [
                    ...state.informationElements.filter(
                        e => e.id !== action.payload.source
                    ),
                    newSource
                ]
            };
        default:
            return state;
    }
};

export default informationElementReducer;
