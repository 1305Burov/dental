import {
    CREATE_DOCTOR,
    REMOVE_DOCTOR,
    GET_DOCTORS,
    UPDATE_DOCTORS
} from "./actionTypes";

export function createDoctor(doctor) {
    return {
        type: CREATE_DOCTOR,
        payload: doctor
    };
}

export function removeDoctor(doctorId) {
    return {
        type: REMOVE_DOCTOR,
        payload: doctorId
    };
}

export function getDoctors(doctors) {
    return {
        type: GET_DOCTORS,
        payload: doctors
    };
}

export function updateDoctor(doctors) {
    return {
        type: UPDATE_DOCTORS,
        payload: doctors
    };
}