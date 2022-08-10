import {
    GET_APPOINTMENT,
} from "./actionTypes";

const initialState = {};

export function appointmentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_APPOINTMENT:
            return action.payload;
        
        default:
            return state;
    }
}