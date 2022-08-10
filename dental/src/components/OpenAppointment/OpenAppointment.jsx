import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
import { appointmentSelector } from "../../store/appointment/selectors";
import { getOneAppointmentThunk } from "../../store/appointment/thunk";
import { updateAppointment } from "../../store/appointments/actionCreators";
import { removeAppointmentThunk, updateAppointmentThunk } from "../../store/appointments/thunk";

export const OpenAppointment = () => {
    const { appointmentId } = useParams();
    const appointment = useSelector(appointmentSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        dispatch(getOneAppointmentThunk(appointmentId));   
    }, [appointmentId]);

    function deleteAppointment() {
        dispatch(removeAppointmentThunk(appointmentId));
        navigate(-1);
    }

    function updateAppointment(e) {
        e.preventDefault();

        const updatedAppointment = {
            diagnos: e.target.diagnos.value,
            healing: e.target.healing.value,
            note: e.target.note.value,
            teethId: e.target.teethId.value
        }

        dispatch(updateAppointmentThunk(appointmentId, updatedAppointment));
        setIsUpdating(p => p = false);
    }

    return (
        
        <>
            <button onClick={() => {navigate(-1)}}>Назад</button>
            {appointment.id && appointment.isAppointment &&
                <div>
                    <p>{appointment.date}</p>
                    <form onSubmit={updateAppointment}>
                        <label>
                            <p>Имя:</p>
                            <input type="text" defaultValue={appointment.name} disabled />
                        </label>
                        <label>
                            <p>Диагноз:</p>
                            <input type="text" defaultValue={appointment.diagnos} name="diagnos" disabled={!isUpdating} />
                        </label>
                        <label>
                            <p>Лечение:</p>
                            <input type="text" defaultValue={appointment.healing} name="healing" disabled={!isUpdating} />
                        </label>
                        <label>
                            <p>Заметки:</p>
                            <input type="text" defaultValue={appointment.note} name="note" disabled={!isUpdating} />
                        </label>
                        <label>
                            <p>Зуб:</p>
                            <input type="text" defaultValue={appointment.teethId} name="teethId" disabled={!isUpdating} />
                        </label>
                    
                        <p>Время приема:</p>
                        <input type="text" defaultValue={appointment.time.from} name="teethId" disabled />
                        <input type="text" defaultValue={appointment.time.to} name="teethId" disabled />

                        {isUpdating && <button>Изменить</button>}
                    </form>
                </div>  
            }
            {appointment.id && !appointment.isAppointment &&
                <div>
                    <p>{appointment.date}</p>
                    <form onSubmit={() => {}}>
                        <label>
                            <p>Имя:</p>
                            <input type="text" defaultValue={appointment.name} name="name" disabled={!isUpdating} />
                        </label>
                        <label>
                            <p>Заметки:</p>
                            <input type="text" defaultValue={appointment.note} name="note" disabled={!isUpdating} />
                        </label>
                    
                        <p>Время приема:</p>
                        <input type="text" defaultValue={appointment.time.from} name="teethId" disabled />
                        <input type="text" defaultValue={appointment.time.to} name="teethId" disabled />

                        {isUpdating && <button>Изменить</button>}
                    </form>
                </div>  
            }

            <button onClick={() => {setIsUpdating(p => !p)}}>{isUpdating ? 'Отмена' : 'Редактировать'}</button>
            <button onClick={deleteAppointment}>Удалить</button>
        </>
        
    );
}


