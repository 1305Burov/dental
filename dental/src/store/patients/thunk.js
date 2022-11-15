import { getPatientsAxios, getPatientAxios, createPatientAxios, updatePatientAxios, deletePatientAxios } from "../../api/patients";
import { removePatientAppointmentsThunk } from "../appointments/thunk";
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

export function getPatientThunk(id) {
    return (dispatch, getState) => {
        getPatientAxios(id)
        .then(patient => dispatch(getPatients(Array(patient))))
        .catch(err => {
            alert('something went wrong! Try again later');
            console.error(err);
        })
    }
}

export function createPatientThunk(patient, navigate) {
    return (dispatch) => {
        createPatientAxios(patient)
        .then((patient) => {
            dispatch(createPatient(patient));
            navigate(-1);
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}

export function updatePatientThunk(id, patients, navigate) {
    return (dispatch, getState) => {
        updatePatientAxios(id, patients)
            .then((patients) => {
                dispatch(updatePatient(patients));
                navigate && navigate(-1);
            })
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function removePatientThunk(patientId, navigate) {
    return (dispatch) => {
        deletePatientAxios(patientId)
        .then(() => {
            dispatch(removePatient(patientId));
            dispatch(removePatientAppointmentsThunk(patientId))
            navigate && navigate(-1);
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}



