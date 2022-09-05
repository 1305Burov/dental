import {
    CREATE_PATIENT,
    REMOVE_PATIENT,
    GET_PATIENTS,
    UPDATE_PATIENT
} from "./actionTypes";

const initialState = [];

export function patientsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PATIENT:
            return [...state, action.payload];
        case REMOVE_PATIENT:
            return state.filter(patient => patient.id !== action.payload);
        case GET_PATIENTS:
            return action.payload;
            
        case UPDATE_PATIENT:
            const patientIdx = state.findIndex(patient => patient.id === action.payload.id);
            state[patientIdx] = action.payload;
            return [...state];

        default:
            return state;
    }
}