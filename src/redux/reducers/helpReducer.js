import {
    TOGGLE_HELP
} from "../types";

const initialState = {
    help: false
};

const helpReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HELP:
            return { ...state, help: !state.help };
        default:
            return state;
    }
};

export default helpReducer;
