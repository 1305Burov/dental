import {
    CREATE_DIAGNOSIS,
    REMOVE_DIAGNOSIS,
    GET_DIAGNOSES,
    UPDATE_DIAGNOSIS
} from "./actionTypes";

export function createDiagnosis(diagnosis) {
    return {
        type: CREATE_DIAGNOSIS,
        payload: diagnosis
    };
}

export function removeDiagnosis(diagnosisId) {
    return {
        type: REMOVE_DIAGNOSIS,
        payload: diagnosisId
    };
}

export function getDiagnoses(diagnoses) {
    return {
        type: GET_DIAGNOSES,
        payload: diagnoses
    };
}

export function updateDiagnosis(diagnosis) {
    return {
        type: UPDATE_DIAGNOSIS,
        payload: diagnosis
    };
}