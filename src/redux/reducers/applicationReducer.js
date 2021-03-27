import { GET_APPLICATIONS, SET_APPLICATION } from "../types";

const initialState = {
    applications: null,
    application: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICATIONS:
            return { ...state, applications: action.payload };
        case SET_APPLICATION:
            return { ...state, application: action.payload };
        default:
            return state;
    }
};
