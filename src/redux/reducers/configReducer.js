import { UPDATE_CONFIG, RESET_CONFIG } from "../types";

const initialState = {
    tension: 0.85,
    radius: 250,
    extent: 360,
    rotate: 0,
    textSize: 16,
    textOffset: 1,
    textMode: "label"
};

const relationshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONFIG:
            return { ...state, ...action.payload };
        case RESET_CONFIG:
            return initialState;
        default:
            return state;
    }
};

export default relationshipReducer;
