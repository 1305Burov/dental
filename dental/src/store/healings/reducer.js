import {
    CREATE_HEALING,
    REMOVE_HEALING,
    GET_HEALINGS,
    UPDATE_HEALING
} from "./actionTypes";

const initialState = [];

export function healingsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_HEALING:
            return [...state, action.payload];
        case REMOVE_HEALING:
            return state.filter(healing => healing.id !== action.payload);
        case GET_HEALINGS:
            return action.payload;
        case UPDATE_HEALING:
            const healingIdx = state.findIndex(healing => healing.id === action.payload.id);
            state[healingIdx] = action.payload;
            return [...state];

        default:
            return state;
    }
}