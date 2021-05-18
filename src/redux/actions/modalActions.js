import { TOGGLE_MODAL } from "../types";

export const toggleModal = (type = "", relation = "") => async dispatch => {
    dispatch({
        type: TOGGLE_MODAL,
        payload: { type, relation }
    });
};
