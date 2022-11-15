import {
    CREATE_DIAGNOSIS,
    REMOVE_DIAGNOSIS,
    GET_DIAGNOSES,
    UPDATE_DIAGNOSIS
} from "./actionTypes";

const initialState = [];

export function diagnosesReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DIAGNOSIS:
            return [...state, action.payload];
            case REMOVE_DIAGNOSIS:
            return state.filter(diagnosis => diagnosis._id !== action.payload);
        case GET_DIAGNOSES:
            return action.payload;
        case UPDATE_DIAGNOSIS:
            const diagnosisIdx = state.findIndex(diagnosis => diagnosis.id === action.payload.id);
            state[diagnosisIdx] = action.payload;
            return [...state];

            default:
                return state;
    }
}