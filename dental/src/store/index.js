import { combineReducers, createStore, applyMiddleware } from "redux";
import { doctorsReducer } from "./doctors/reducer";
import { activeDoctorReducer } from "./activeDoctor/reducer";
import { appointmentsReducer } from "./appointments/reducer";
import { patientsReducer } from "./patients/reducer";
import { healingsReducer } from "./healings/reducer";
import { diagnosesReducer } from "./diagnoses/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    doctors: doctorsReducer,
    activeDoctor: activeDoctorReducer,
    appoitments: appointmentsReducer,
    patients: patientsReducer,
    healings: healingsReducer,
    diagnoses: diagnosesReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));