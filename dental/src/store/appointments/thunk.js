import { getAppointmentsAxios, getAppointmentAxios, getTodaysAppointmentsAxios, createAppointmentAxios, updateAppointmentAxios, deleteAppointmentAxios, getPatientAppointmentsAxios } from "../../api/appointments";
import { createAppointment, removeAppointment, getAppointment, updateAppointment, getOneAppointment } from "../../store/appointments/actionCreators";
import { updateDoctorThunk } from "../doctors/thunk";

// export function getAppointmentThunk() {
//     return (dispatch, getState) => {
//         getAppointmentsAxios()
//             .then(appointments => dispatch(getAppointment(appointments)))
//             .catch(err => {
//                 alert('something went wrong! Try again later');
//                 console.error(err);
//             })

//     }
// }

export function getPatientAppointmentsThunk(id) {
    return (dispatch, getState) => {
        getPatientAppointmentsAxios(id)
            .then(appointments => dispatch(getAppointment(appointments)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}

export function getTodaysAppointmentsThunk(todayDate, doctorId) {
    return (dispatch, getState) => {
        getTodaysAppointmentsAxios(todayDate, doctorId)
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

export function removeAppointmentThunk(appointmentId) {
    return (dispatch) => {
        deleteAppointmentAxios(appointmentId)
        .then(() => {
            dispatch(removeAppointment(appointmentId));
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}

export function updateAppointmentThunk(id, appointment) {
    return (dispatch, getState) => {
        updateAppointmentAxios(id, appointment)
            .then(appointment => dispatch(updateAppointment(appointment)))
            .catch(err => {
                alert('something went wrong! Try again later');
                console.error(err);
            })

    }
}