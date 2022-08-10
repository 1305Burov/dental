import { combineReducers, createStore, applyMiddleware } from "redux";
import { doctorsReducer } from "./doctors/reducer";
import { activeDoctorReducer } from "./activeDoctor/reducer";
import { appointmentsReducer } from "./appointments/reducer";
import { appointmentReducer } from "./appointment/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    doctors: doctorsReducer,
    activeDoctor: activeDoctorReducer,
    appoitments: appointmentsReducer,
    appoitment: appointmentReducer,
    diagnoses: () => []
});

export const store = createStore(rootReducer, applyMiddleware(thunk));