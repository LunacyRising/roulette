import { ADD_OPTION, REMOVE_OPTION, SUBMIT_OPTIONS } from "./types";

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_OPTION:
            return {
                ...state,
                options: [...state.options, action.payload]
            };
        case REMOVE_OPTION:
            return {
                ...state,
                options: action.payload
            };
        case SUBMIT_OPTIONS:
            return {
                ...state,
                 options: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;