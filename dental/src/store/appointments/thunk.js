import { getAppointmentsAxios, getAppointmentAxios, createAppointmentAxios, updateAppointmentAxios, deleteAppointmentAxios } from "../../api/appointments";
import { createAppointment, removeAppointment, getAppointment, updateAppointment } from "../../store/appointments/actionCreators";

export function getAppointmentThunk() {
    return (dispatch, getState) => {
        getAppointmentsAxios()
            .then(appointments => dispatch(getAppointment(appointments)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function newAppointmentThunk(newAppointment) {
    return (dispatch) => {
        createAppointmentAxios(newAppointment)
        .then((newAppointment) => {
            dispatch(createAppointment(newAppointment));
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}


