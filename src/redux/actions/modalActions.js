import { TOGGLE_MODAL } from "../types";

export const toggleModal = (type, relation) => async dispatch => {
    console.log({ type, relation });
    dispatch({
        type: TOGGLE_MODAL,
        payload: { type, relation }
    });
};
