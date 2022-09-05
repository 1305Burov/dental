import axios from "axios";
import { BASE_URL } from "../constants";

const patientsApi = axios.create({
    baseURL: `${BASE_URL}/patients`,
})

patientsApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getPatientsAxios = (doctorId) => patientsApi.get(`?doctorId=${doctorId}`);
export const getPatientAxios = (patientId) => patientsApi.get(`/${patientId}`);
export const createPatientAxios = (newPatient) => patientsApi.post('', newPatient);
export const updatePatientAxios = (patientId, updateData) => patientsApi.patch(`/${patientId}`, updateData);
export const deletePatientAxios = (patientId) => patientsApi.delete(`/${patientId}`);
    
