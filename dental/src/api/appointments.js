import axios from "axios";
import { BASE_URL } from "../constants";

const appointmentsApi = axios.create({
    baseURL: `${BASE_URL}/appointments`,
})

appointmentsApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getAppointmentsAxios = () => appointmentsApi.get();
export const getAppointmentAxios = (appointmentId) => appointmentsApi.get(`/${appointmentId}`);
export const getTodaysAppointmentsAxios = (todayDate, doctorId) => appointmentsApi.get(`?date=${todayDate}&doctorId=${doctorId}`);
export const getPatientAppointmentsAxios = (patientId) => appointmentsApi.get(`?patientId=${patientId}`);
export const createAppointmentAxios = (newAppointment) => appointmentsApi.post('', newAppointment);
export const updateAppointmentAxios = (appointmentId, updateData) => appointmentsApi.patch(`/${appointmentId}`, updateData);
export const deleteAppointmentAxios = (appointmentId) => appointmentsApi.delete(`/${appointmentId}`);
export const deletePatientAppointmentsAxios = (patientId) => appointmentsApi.delete(`?patientId=${patientId}`);
    
