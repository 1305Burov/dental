import {
    GET_APPOINTMENT,
} from "./actionTypes";

export function getOneAppointment(appointment) {
    return {
        type: GET_APPOINTMENT,
        payload: appointment
    };
}
 