import {
    SET_ACTIVE_DOCTOR,
    GET_ACTIVE_DOCTOR,
} from "./actionTypes";

export function setActiveDoctor(doctor) {
    return {
        type: SET_ACTIVE_DOCTOR,
        payload: doctor
    };
}

export function getActiveDoctor() {
    return {
        type: GET_ACTIVE_DOCTOR,
    };
}
