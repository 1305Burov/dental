import { combineReducers, createStore, applyMiddleware } from "redux";
import { doctorsReducer } from "./doctors/reducer";
import { activeDoctorReducer } from "./activeDoctor/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    doctors: doctorsReducer,
    activeDoctor: activeDoctorReducer,
    patients: () => [],
    appoitments: () => [],
    diagnoses: () => []
});

export const store = createStore(rootReducer, applyMiddleware(thunk));