import axios from "axios";

import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    TOGGLE_LOADING_AUTH
} from "../types";
import { environment } from "../../utils/environment";

// Register User
export const register = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        dispatch(setLoading());
        const url = environment.apiEndpoint;
        console.log(formData);
        const res = await axios.post(url + "register/", formData, config);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error register new user", error);
    }
};

// Login user
export const login = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        dispatch(setLoading());
        const url = environment.apiEndpoint;
        const res = await axios.post(url + "login/", formData, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error login user", error);
    }
};

// load user
export const loadUser = () => async dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: localStorage.getItem("token") }
    });
};

// Logout
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
};

// Set loading to true
export const setLoading = () => {
    return { type: TOGGLE_LOADING_AUTH };
};
