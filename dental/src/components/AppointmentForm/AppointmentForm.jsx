import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { DropdownList } from "../DropdownList/DropdownList";
import { TimePicker } from "../TimePicker/TimePicker";
import { ToothPick } from "../ToothPick/ToothPick";


export const AppointmentForm = ({freeTime, setShowProp, chosenTime}) => {
    const { dayInSeconds } = useParams();
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector);
    
    const [isAppointment, setIsAppointment] = useState(true);
    const [visitNum, setVisitNum] = useState('');
    const [activeDay, setActiveDay] = useState(null);

    
    useEffect(() => {
        dispatch(getActiveDoctor())
    }, [])
    
    useEffect(() => {
        const day = new Date(Number(dayInSeconds));
        setActiveDay(p => p = `${day.getDate()} ${day.getMonth()} ${day.getFullYear()}`);
    }, [dayInSeconds])

    const diagnosis = [
        {
            id: 1,
            name: 'some diagnos 1',
            visitNumber: 1,
        },
        {
            id: 2,
            name: 'some diagnos 2',
            visitNumber: 2,
        }
    ]

    const healings = [
        {
            id: 1,
            name: 'some healings 1',
            visitNumber: 1,
        },
        {
            id: 2,
            name: 'some healings 2',
            visitNumber: 2,
        }
    ]

    const visitDiagnosis = diagnosis.filter(diagnos => diagnos.visitNumber === visitNum);
    const visitHealings = healings.filter(healing => healing.visitNumber === visitNum);

    return (
        <>
            <div>
                { isAppointment ? 
                    <div className="appointment__block">
                        <button className="button button-note" onClick={() => setIsAppointment((p) => p = !p)}>Заметка</button>
                        <button className="button_close" onClick={() => setShowProp(false)}></button>

                        <form className="appointment__form form">
                            <input className="form__date" type="text" defaultValue={activeDay} name='date' disabled />
                            <input type="hidden" defaultValue={activeDoctor.id} name='activeDoctor' disabled />
                            <div className="flex">
                                <DropdownList usedData={activeDoctor} property={'patients'} defaultText={'Пациент'} inputName={'patientName'} setVisit={setVisitNum} />
                                <input type="number" className="form__visit" value={visitNum} disabled />
                            </div>
                                <DropdownList usedData={visitDiagnosis} inputName={'diagnosName'} defaultText={'Диагноз'} />
                                <DropdownList usedData={visitHealings} inputName={'healingName'} defaultText={'Лечение'} />
                                <textarea type="text" className="form__notes form__notes-patient" placeholder='Заметки' />
                                <TimePicker freeTime={freeTime} chosenTime={chosenTime} />
                                <ToothPick />
                                <button type="submit" className="button">Отправить</button>
                        </form>
                    </div> : 
                    <div className="appointment__block">
                        <button onClick={() => setIsAppointment((p) => p = !p)} className='button' >Запись пациента</button>
                        <button className="button_close" onClick={() => setShowProp(false)}></button>

                    
                        <form className="appointment__form">
                            <input className="form__date" type="text" defaultValue={activeDay} name='date' disabled />
                            <input type="text" placeholder="Название" required />
                            <textarea type="text" placeholder="Заметки"  />
                            <button type="submit" className="button button-note">Отправить</button>
                        </form>
                    </div>
                } 
            </div>
        </>
    );
}
 