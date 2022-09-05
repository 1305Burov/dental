import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { Link } from 'react-router-dom';
import { getPatientsThunk } from "../../store/patients/thunk";
import { patientsSelector } from "../../store/patients/selectors";



export const GetPatients = () => {
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector);
    const patients = useSelector(patientsSelector);
    const [isOnTreat, setisOnTreat] = useState(false);
    const [searchedValue, setSearchedValue] = useState('');
    
    useEffect(() => {
        dispatch(getPatientsThunk(activeDoctor.id));
    }, [activeDoctor])

    function filterPatients() {
        setisOnTreat(p => p = !p);
    }

    return (
        <div className="patient-list">
            <button onClick={filterPatients}>{isOnTreat ? 'All' : 'On treat'}</button>
            <input className="patient-list_search" placeholder="Поиск" onInput={(e) => {setSearchedValue(p => p = e.target.value.toLowerCase())}} />
            <p className="patient-list__active">{isOnTreat ? 'На лечении' : 'Все'}</p>
            {activeDoctor.doctorName && patients.map(patient => {
                if (patient.name.toLowerCase().includes(searchedValue) || searchedValue === '') {
                    if (isOnTreat) {
                        return isOnTreat === patient.isTreated ? <Link to={`patient/${patient.id}`} className="patient-list__link" key={patient.id}>{patient.name}</Link> : '';
                    }else {
                        return <Link to={`patient/${patient.id}`} className="patient-list__link" key={patient.id}>{patient.name}</Link>;
                    }
                }
            })}
        </div>
    );
}
