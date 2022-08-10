import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
import { appointmentSelector } from "../../store/appointment/selectors";
import { getOneAppointmentThunk } from "../../store/appointment/thunk";

export const OpenAppointment = () => {
    const { appointmentId } = useParams();
    const appointment = useSelector(appointmentSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isUpdating, setIsUpdating] = useState(true);

    useEffect(() => {
        dispatch(getOneAppointmentThunk(appointmentId));   
    }, [appointmentId]);

    console.log(appointment)

    return (
        
        <>
            {appointment.id && appointment.isAppointment &&
                <div>
                    <p>{appointment.date}</p>
                    <form onSubmit={() => {}}>
                        <label>
                            <p>Имя:</p>
                            <input type="text" defaultValue={appointment.name} name="name" disabled={isUpdating} />
                        </label>
                        <label>
                            <p>Диагноз:</p>
                            <input type="text" defaultValue={appointment.diagnos} name="diagnos" disabled={isUpdating} />
                        </label>
                        <label>
                            <p>Лечение:</p>
                            <input type="text" defaultValue={appointment.healing} name="healing" disabled={isUpdating} />
                        </label>
                        <label>
                            <p>Заметки:</p>
                            <input type="text" defaultValue={appointment.note} name="note" disabled={isUpdating} />
                        </label>
                        <label>
                            <p>Зуб:</p>
                            <input type="text" defaultValue={appointment.teethId} name="teethId" disabled={isUpdating} />
                        </label>
                    
                        <p>Время приема:</p>
                        <input type="text" defaultValue={appointment.time.from} name="teethId" disabled />
                        <input type="text" defaultValue={appointment.time.to} name="teethId" disabled />
                    </form>
                </div>  
            }
            {appointment.id && !appointment.isAppointment &&
                <div>
                    <p>{appointment.date}</p>
                    <form onSubmit={() => {}}>
                        <label>
                            <p>Имя:</p>
                            <input type="text" defaultValue={appointment.name} name="name" disabled={isUpdating} />
                        </label>
                        <label>
                            <p>Заметки:</p>
                            <input type="text" defaultValue={appointment.note} name="note" disabled={isUpdating} />
                        </label>
                    
                        <p>Время приема:</p>
                        <input type="text" defaultValue={appointment.time.from} name="teethId" disabled />
                        <input type="text" defaultValue={appointment.time.to} name="teethId" disabled />
                    </form>
                </div>  
            }
        </>
        
    );
}


