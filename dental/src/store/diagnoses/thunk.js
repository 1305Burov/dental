import { createDiagnosisAxios, deleteDiagnosisAxios, getDiagnosesAxios, updateDiagnosisAxios } from "../../api/diagnosis";
import { createDiagnosis, getDiagnoses, removeDiagnosis, updateDiagnosis } from "./actionCreators";


export function getDiagnosesThunk() {
    return (dispatch, getState) => {
        getDiagnosesAxios()
            .then(diagnoes => dispatch(getDiagnoses(diagnoes)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function createDiagnosisThunk(diagnosis) {
    return (dispatch, getState) => {
        createDiagnosisAxios(diagnosis)
            .then(diagnosis =>  dispatch(createDiagnosis(diagnosis) ))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}


export function deleteDiagnosisThunk(diagnosisId) {
    return (dispatch, getState) => {
        deleteDiagnosisAxios(diagnosisId)
            .then(() => dispatch(removeDiagnosis(diagnosisId)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}


