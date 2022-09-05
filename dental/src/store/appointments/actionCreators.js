import {
    CREATE_APPOINTMENT,
    REMOVE_APPOINTMENT,
    GET_APPOINTMENTS,
    UPDATE_APPOINTMENTS
} from "./actionTypes";

export function createAppointment(appointment) {
    return {
        type: CREATE_APPOINTMENT,
        payload: appointment
    };
}

export function removeAppointment(appointmentId) {
    return {
        type: REMOVE_APPOINTMENT,
        payload: appointmentId
    };
}

export function getAppointment(appointments) {
    return {
        type: GET_APPOINTMENTS,
        payload: appointments
    };
}

export function updateAppointment(appointment) {
    return {
        type: UPDATE_APPOINTMENTS,
        payload: appointment
    };
}