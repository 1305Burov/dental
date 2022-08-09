import {
    CREATE_APPOINTMENT,
    REMOVE_APPOINTMENT,
    GET_APPOINTMENTS,
    UPDATE_APPOINTMENTS
} from "./actionTypes";

const initialState = [];

export function appointmentsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_APPOINTMENT:
            return [...state, action.payload];
        case REMOVE_APPOINTMENT:
            return state.filter(appointment => appointment.id !== action.payload);
        case GET_APPOINTMENTS:
            return action.payload;
        case UPDATE_APPOINTMENTS:
            const appointmentIdx = state.findIndex(appointment => appointment.id === action.payload.id);
            state[appointmentIdx] = action.payload;
            return [...state];

        default:
            return state;
    }
}