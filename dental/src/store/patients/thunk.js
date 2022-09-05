import { getPatientsAxios, getPatientAxios, createPatientAxios, updatePatientAxios, deletePatientAxios } from "../../api/patients";
import { createPatient, removePatient, getPatients, getPatient, updatePatient } from "../patients/actionCreators";

export function getPatientsThunk(id) {
    return (dispatch, getState) => {
        getPatientsAxios(id)
        .then(patients => dispatch(getPatients(patients)))
        .catch(err => {
            alert('something went wrong! Try again later');
            console.error(err);
        })
    }
}

export function createPatientThunk(patient) {
    return (dispatch) => {
        createPatientAxios(patient)
        .then((patient) => {
            dispatch(createPatient(patient));
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}

export function updatePatientThunk(id, patients) {
    return (dispatch, getState) => {
        updatePatientAxios(id, patients)
            .then(patients =>  dispatch(updatePatient(patients)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function removePatientThunk(patientId) {
    return (dispatch) => {
        deletePatientAxios(patientId)
        .then(() => {
            dispatch(removePatient(patientId));
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}


