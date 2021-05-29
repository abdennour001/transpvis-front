import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    TOGGLE_LOADING_AUTH
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: false,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            setAuthToken(action.payload.token);

            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
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
