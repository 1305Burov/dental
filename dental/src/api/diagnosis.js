import axios from "axios";
import { BASE_URL } from "../constants";

const diagnosisApi = axios.create({
    baseURL: `${BASE_URL}/diagnoses`, //diagnosis
})

diagnosisApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getDiagnosesAxios = () => diagnosisApi.get();
export const createDiagnosisAxios = (newDiagnosis) => diagnosisApi.post('', newDiagnosis);
export const updateDiagnosisAxios = (diagnosisId, updateData) => diagnosisApi.patch(`/${diagnosisId}`, updateData);
export const deleteDiagnosisAxios = (diagnosisId) => diagnosisApi.delete(`/${diagnosisId}`);
    
