import { INC, DEC } from "./actionTypes";



const initialState = [];

export function doctorsReducer(state = initialState, action) {
    switch (action.type) {
        case INC:
            return state + 1;
        case DEC:
            return state - 1;

        default:
            return state;
    }
}