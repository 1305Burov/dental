import { combineReducers, createStore } from "redux";
import { doctorsReducer } from "./doctors/reducer";

const rootReducer = combineReducers({
    doctors: doctorsReducer,
    patients: () => [],
    appoitments: () => [],
    diagnoses: () => []
});

export const store = createStore(rootReducer);