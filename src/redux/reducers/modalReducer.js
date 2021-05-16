import { TOGGLE_MODAL } from "../types";

const initialState = {
    opened: false,
    type: "",
    relation: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                opened: !state.opened,
                type: action.payload.type,
                relation: action.payload.relation
            };

        default:
            return state;
    }
};
