import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    TOGGLE_LOADING_AUTH
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            setAuthToken(action.payload.tokenaction.payload.token);

            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case LOGOUT:
            localStorage.removeItem("token");
            setAuthToken();

            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };

        case TOGGLE_LOADING_AUTH:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};
