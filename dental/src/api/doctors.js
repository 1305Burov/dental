import axios from "axios";
import { BASE_URL } from "../constants";

const doctorsApi = axios.create({
    baseURL: `${BASE_URL}/doctors`,
})

doctorsApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getDoctorsAxios = () => doctorsApi.get();
export const getDoctorAxios = (doctorId) => doctorsApi.get(`/${doctorId}`);
export const createDoctorAxios = (newDoctor) => doctorsApi.post('', newDoctor);
export const updateDoctorAxios = (doctorId, updateData) => doctorsApi.patch(`/${doctorId}`, updateData);
export const deleteDoctorAxios = (doctorId) => doctorsApi.delete(`/${doctorId}`);
    
