import {
    GET_APPLICATIONS,
    SET_APPLICATION,
    SET_FOCUSED,
    REMOVE_FOCUSED,
    TOGGLE_LOADING_APPLICATION
} from "../types";

const initialState = {
    applications: null,
    application: null,
    focused: null,
    loading: false
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICATIONS:
            return { ...state, applications: action.payload, loading: false };
        case SET_APPLICATION:
            return {
                ...state,
                application: state.applications.find(
                    app => app.id === action.payload
                )
            };
        case SET_FOCUSED:
            return { ...state, focused: action.payload };
        case REMOVE_FOCUSED:
            return { ...state, focused: null };
        case TOGGLE_LOADING_APPLICATION:
            return { ...state, loading: !state.loading };
        default:
            return state;
    }
};

export default applicationReducer;
