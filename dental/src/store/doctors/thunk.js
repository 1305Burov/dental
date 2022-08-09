import { getDoctorsAxios, getDoctorAxios, createDoctorAxios, updateDoctorAxios, deleteDoctorAxios } from "../../api/doctors";
import { getDoctors, createDoctor, removeDoctor, updateDoctor } from "../../store/doctors/actionCreators";

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
            .then(doctors => dispatch(updateDoctor(doctors)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}


