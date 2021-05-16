import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT,
    TOGGLE_LOADING_AUTH
} from "../types";

// Register User
export const register = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        dispatch(setLoading());

        const res = await axios.post("/api/register", formData, config);

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

        const res = await axios.post("api/login", formData, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        console.error("Error login user", error);
    }
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
