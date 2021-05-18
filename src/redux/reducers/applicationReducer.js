import {
    GET_APPLICATIONS,
    SET_APPLICATION,
    SET_FOCUSED,
    REMOVE_FOCUSED,
    TOGGLE_LOADING_APPLICATION,
    CREATE_APPLICATION,
    UPDATE_APPLICATION,
    DELETE_APPLICATION
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
        case CREATE_APPLICATION:
            return {
                ...state,
                loading: false,
                applications: [...state.applications, action.payload]
            };
        case UPDATE_APPLICATION:
            return {
                ...state,
                loading: false,
                applications: [
                    ...state.applications.filter(
                        app => app.id !== action.payload.id
                    ),
                    action.payload
                ]
            };
        case DELETE_APPLICATION:
            return {
                ...state,
                loading: false,
                applications: state.applications.filter(
                    app => app.id !== action.payload.id
                )
            };
        default:
            return state;
    }
};

export default applicationReducer;
