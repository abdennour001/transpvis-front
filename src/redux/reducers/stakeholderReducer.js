import {
    GET_STAKEHOLDERS,
    TOGGLE_LOADING_STAKEHOLDERS,
    CREATE_STAKEHOLDER,
    UPDATE_STAKEHOLDER,
    DELETE_STAKEHOLDER
} from "../types";

const initialState = {
    stakeholders: [],
    loading: false
};

const stakeholderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAKEHOLDERS:
            return { ...state, stakeholders: action.payload, loading: false };
        case TOGGLE_LOADING_STAKEHOLDERS:
            return { ...state, loading: !state.loading };
        case CREATE_STAKEHOLDER:
            return {
                ...state,
                loading: false,
                stakeholders: [action.payload, ...state.stakeholders]
            };
        case UPDATE_STAKEHOLDER:
            return {
                ...state,
                loading: false,
                stakeholders: state.stakeholders.map(s => {
                    return s.id !== action.payload.id ? s : action.payload;
                })
            };
        case DELETE_STAKEHOLDER:
            return {
                ...state,
                loading: false,
                stakeholders: state.stakeholders.filter(
                    s => s.id !== +action.payload.id
                )
            };
        default:
            return state;
    }
};

export default stakeholderReducer;
