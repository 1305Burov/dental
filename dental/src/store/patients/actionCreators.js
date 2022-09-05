import {
    CREATE_PATIENT,
    REMOVE_PATIENT,
    GET_PATIENTS,
    UPDATE_PATIENT
} from "./actionTypes";

export function createPatient(patient) {
    return {
        type: CREATE_PATIENT,
        payload: patient
    };
}

export function removePatient(patientId) {
    return {
        type: REMOVE_PATIENT,
        payload: patientId
    };
}

export function getPatients(patients) {
    return {
        type: GET_PATIENTS,
        payload: patients
    };
}

export function updatePatient(patient) {
    return {
        type: UPDATE_PATIENT,
        payload: patient
    };
}