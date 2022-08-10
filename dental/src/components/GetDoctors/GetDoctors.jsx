import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doctorsSelector } from "../../store/doctors/selectors";
import { getDoctorsThunk } from "../../store/doctors/thunk";
import { setActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";

export const GetDoctors = () => {
    const doctors = useSelector(doctorsSelector);
    const activeDoctor = useSelector(activeDoctorSelector); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDoctorsThunk());
    }, [])
    
    useEffect(() => {
        if (!activeDoctor.id) {
            doctors.length && dispatch(setActiveDoctor(doctors[0]));
        }
    }, [doctors])
    
    function setActiveDoc(e) {
        const doctorId = Number(e.target.value);
        const DoctorIdx = doctors.findIndex(doctor => doctor.id === doctorId);
        dispatch(setActiveDoctor(doctors[DoctorIdx]));
    }
    return (
        <>
            <select value={activeDoctor.id} onChange={(e) => setActiveDoc(e)} >
                {doctors.map((doctor) => {
                    return <option value={doctor.id} key={doctor.id}>{doctor.doctorName}</option>
                })}
            </select>
        </>
        
    )
}
