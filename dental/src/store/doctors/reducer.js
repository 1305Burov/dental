import {
    CREATE_DOCTOR,
    REMOVE_DOCTOR,
    GET_DOCTORS,
    UPDATE_DOCTORS
} from "./actionTypes";

const initialState = [];

export function doctorsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DOCTOR:
            return [...state, action.payload];
        case REMOVE_DOCTOR:
            return state.filter(doctor => doctor.id !== action.payload);
        case GET_DOCTORS:
            return action.payload;
        case UPDATE_DOCTORS:
            const doctorIdx = state.findIndex(doctor => doctor.id === action.payload.id);
            state[doctorIdx] = action.payload;
            return [...state];

        default:
            return state;
    }
}