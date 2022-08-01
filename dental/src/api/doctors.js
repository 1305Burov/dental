import axios from "axios";
import { BASE_URL } from "../constants";

const doctorsApi = axios.create({
    baseURL: `${BASE_URL}/doctors`,
})

doctorsApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getDoctors = () => doctorsApi.get();
export const getDoctor = (doctorId) => doctorsApi.get(`/${doctorId}`);
export const createDoctor = (newDoctor) => doctorsApi.post('', newDoctor);
export const updateDoctor = (doctorId, updateData) => doctorsApi.patch(`/${doctorId}`, updateData);
export const deleteDoctor = (doctorId) => doctorsApi.delete(`/${doctorId}`);
    
