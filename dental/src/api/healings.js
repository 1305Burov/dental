import axios from "axios";
import { BASE_URL } from "../constants";

const healingsApi = axios.create({
    baseURL: `${BASE_URL}/healings`,
})

healingsApi.interceptors.response.use(
    (response) => response.data, 
    (error) => Promise.reject(error)
);

export const getHealingsAxios = () => healingsApi.get();
export const createHealingAxios = (newHealing) => healingsApi.post('', newHealing);
export const updateHealingAxios = (healingId, updateData) => healingsApi.patch(`/${healingId}`, updateData);
export const deleteHealingAxios = (healingId) => healingsApi.delete(`/${healingId}`);
    
