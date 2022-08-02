import {
    GET_ACTIVE_DOCTOR,
    SET_ACTIVE_DOCTOR,
} from "./actionTypes";

const initialState = {};

export function activeDoctorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_DOCTOR:
            return state = action.payload;
        case GET_ACTIVE_DOCTOR:
            return state;

        default:
            return state;
    }
}