import {
    GET_INFORMATION_ELEMENTS,
    TOGGLE_LOADING_INFORMATION_ELEMENTS,
    CREATE_INFORMATION_ELEMENT,
    ADD_INFORMATION_ELEMENT_ASSOCIATION,
    DELETE_INFORMATION_ELEMENT,
    UPDATE_INFORMATION_ELEMENT,
    REMOVE_INFORMATION_ELEMENT_ASSOCIATION
} from "../types";

const initialState = {
    informationElements: [],
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
                    action.payload,
                    ...state.informationElements
                ]
            };
        case UPDATE_INFORMATION_ELEMENT:
            return {
                ...state,
                loading: false,
                informationElements: state.informationElements.map(ie => {
                    return ie.id !== action.payload.id ? ie : action.payload;
                })
            };
        case DELETE_INFORMATION_ELEMENT:
            return {
                ...state,
                loading: false,
                informationElements: state.informationElements.filter(
                    e => e.id !== +action.payload.id
                )
            };
        case ADD_INFORMATION_ELEMENT_ASSOCIATION:
            let newSource = state.informationElements.find(
                e => e.id === +action.payload.source
            );
            newSource.information_elements = newSource.information_elements.concat(
                +action.payload.target
            );

            return {
                ...state,
                loading: false,
                informationElements: [
                    ...state.informationElements.filter(
                        e => e.id !== +action.payload.source
                    ),
                    newSource
                ]
            };
        case REMOVE_INFORMATION_ELEMENT_ASSOCIATION:
            let newSource_ = state.informationElements.find(
                e => e.id === +action.payload.source
            );
            newSource_.information_elements = newSource_.information_elements.filter(
                ie => ie !== +action.payload.target
            );

            return {
                ...state,
                loading: false,
                informationElements: [
                    ...state.informationElements.filter(
                        e => e.id !== +action.payload.source
                    ),
                    newSource_
                ]
            };
        default:
            return state;
    }
};

export default informationElementReducer;
