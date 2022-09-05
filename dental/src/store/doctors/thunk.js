import { getDoctorsAxios, getDoctorAxios, createDoctorAxios, updateDoctorAxios, deleteDoctorAxios } from "../../api/doctors";
import { getDoctors, createDoctor, removeDoctor, updateDoctor } from "../../store/doctors/actionCreators";


export function createDoctorThunk(doctor) {
    return (dispatch, getState) => {
        createDoctorAxios(doctor)
            .then(doctor =>  dispatch(createDoctor(doctor) ))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}


export function getDoctorsThunk() {
    return (dispatch, getState) => {
        getDoctorsAxios()
            .then(doctors => dispatch(getDoctors(doctors)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function updateDoctorThunk(id, doctors) {
    return (dispatch, getState) => {

        updateDoctorAxios(id, doctors)
            .then(doctors =>  dispatch(updateDoctor(doctors) ))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}


export function deleteDoctorThunk(doctorId) {
    return (dispatch, getState) => {
        deleteDoctorAxios(doctorId)
            .then(() => dispatch(removeDoctor(doctorId)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })
    }
}
