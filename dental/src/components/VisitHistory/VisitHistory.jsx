import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appointmentsSelector } from "../../store/appointments/selectors";
import { getPatientAppointmentsThunk } from "../../store/appointments/thunk";

export const VisitHistory = ({id, teethId}) => {
    const dispatch = useDispatch();
    const visits = useSelector(appointmentsSelector);

    useEffect(() => {
        dispatch(getPatientAppointmentsThunk(id))
    }, []);

    return (
        <div className="visit-box">
            {visits.map((visit) => {
                if (!teethId) {
                    return <div className="visit-history" key={visit.id}>
                        <span>Дата: {visit.date}</span>
                        <p> Зуб: {visit.teethId}</p>
                        <p> Диагноз: {visit.diagnos}</p>
                        <p> Лечение: {visit.healing}</p>
                        <p> Заметка: {visit.note}</p>
                    </div>
                }
                if (teethId == visit.teethId) {
                    return <div className="visit-history" key={visit.id}>
                        <span>Дата: {visit.date}</span>
                        <p> Зуб: {visit.teethId}</p>
                        <p> Диагноз: {visit.diagnos}</p>
                        <p> Лечение: {visit.healing}</p>
                        <p> Заметка: {visit.note}</p>
                    </div>
                }
            })}
        </div>
    );
}