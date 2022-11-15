import {
    CREATE_APPOINTMENT,
    REMOVE_APPOINTMENT,
    REMOVE_PATIENT_APPOINTMENTS,
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

export function removePatientAppointments(patientId) {
    return {
        type: REMOVE_PATIENT_APPOINTMENTS,
        payload: patientId
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