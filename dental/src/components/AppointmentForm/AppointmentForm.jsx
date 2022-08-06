import { DropdownList } from "../DropdownList/DropdownList";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { TimePicker } from "../TimePicker/TimePicker";

export const AppointmentForm = ({freeTime}) => {
    const [isAppointment, setIsAppointment] = useState(true);
    const [visitNum, setVisitNum] = useState('');
        
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector);

    useEffect(() => {
        dispatch(getActiveDoctor())
    }, [])

    function changeAppointment() {
        setIsAppointment((p) => p = !p);
    }

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
        <div>
            { isAppointment ? 
                <div className="appointment__block">
                    <button onClick={changeAppointment}>Заметка</button>
                
                    <form className="appointment__form form">
                        <div className="flex">
                            <DropdownList usedData={activeDoctor} property={'patients'} defaultText={'Пациент'} inputName={'patientName'} setVisit={setVisitNum} />
                            <input type="number" className="form__visit" value={visitNum} disabled />
                        </div>
                            <DropdownList usedData={visitDiagnosis} defaultText={'Диагноз'} />
                            <DropdownList usedData={visitHealings} defaultText={'Лечение'} />
                            <textarea type="text" className="form__notes form__notes-patient" placeholder='Заметки' />
                            <TimePicker freeTime={freeTime} />
                    </form>
                </div> : 
                <div className="appointment__block">
                    <button onClick={changeAppointment}>Запись пациента</button>
                
                    <form className="appointment__form">
                        <input type="text" placeholder="Название" required />
                        <textarea type="text" placeholder="Заметки"  />
                    </form>
                </div>
            } 
        </div>
    );
}
 