import { getAppointmentAxios } from "../../api/appointments";
import { getOneAppointment } from "../../store/appointment/actionCreators";

export function getOneAppointmentThunk(appointmentId) {
    return (dispatch) => {
        getAppointmentAxios(appointmentId)
        .then((appointment) => {
            dispatch(getOneAppointment(appointment));
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}
