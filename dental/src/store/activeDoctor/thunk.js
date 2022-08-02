import { getDoctorsAxios, getDoctorAxios, createDoctorAxios, updateDoctorAxios, deleteDoctorAxios } from "../../api/doctors";
import { getDoctors, createDoctor, removeDoctor, updateDoctor } from "../doctors/actionCreators";

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


