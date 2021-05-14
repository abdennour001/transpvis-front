import { UPDATE_CONFIG, RESET_CONFIG } from "../types";

export const updateConfig = newConfig => async dispatch => {
    dispatch({
        type: UPDATE_CONFIG,
        payload: newConfig
    });
};
