import { GET_APPLICATIONS, SET_APPLICATION } from "../types";

const initialState = {
    applications: null,
    application: null
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICATIONS:
            return { ...state, applications: action.payload };
        case SET_APPLICATION:
            return {
                ...state,
                application: state.applications.find(
                    app => app.id === action.payload
                )
            };
        default:
            return state;
    }
};

export default applicationReducer;
