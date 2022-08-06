import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";



export const GetPatients = () => {
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector);
    const [isOnTreat, setisOnTreat] = useState(false);

    useEffect(() => {
        dispatch(getActiveDoctor())
    }, [])

    function filterPatients() {
        setisOnTreat(p => p = !p);
    }

    return (
        <div className="patient-list">
            <button onClick={filterPatients}>{isOnTreat ? 'All' : 'On treat'}</button>
            {activeDoctor.doctorName && activeDoctor.patients.map(patient => {
                if (isOnTreat) {
                    return isOnTreat === patient.isTreated ? <p key={patient.id}>{patient.name}</p> : '';
                }else {
                    return <p key={patient.id}>{patient.name}</p>
                }
            })}
        </div>
    );
}
