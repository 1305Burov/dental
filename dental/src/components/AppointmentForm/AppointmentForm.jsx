import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { newAppointmentThunk } from "../../store/appointments/thunk";
import { patientsSelector } from "../../store/patients/selectors";
import { updatePatientThunk } from "../../store/patients/thunk";
import { DropdownList } from "../DropdownList/DropdownList";
import { TimePicker } from "../TimePicker/TimePicker";
import { ToothPick } from "../ToothPick/ToothPick";

export const AppointmentForm = ({freeTime, setShowProp, chosenTime}) => {
    const { dayInSeconds } = useParams();
    const dispatch = useDispatch();

    const patients = useSelector(patientsSelector);
    const activeDoctor = useSelector(activeDoctorSelector);
    
    const [isAppointment, setIsAppointment] = useState(true);
    const [visitNum, setVisitNum] = useState('');
    const [activeDay, setActiveDay] = useState(null);
    const [chosenTooth, setChosenTooth] = useState('');

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
   
    function addAppointment(e) {
        e.preventDefault();
        
            if (isAppointment) {
                try {
                    if (!e.target.from.value || !e.target.to.value) {
                        throw 'Назначьте время'
                    }
                    const newAppointment = {
                        "doctorId": Number(e.target.activeDoctor.value),
                        "teethId": Number(e.target.teethId.value), 
                        "patientId": JSON.parse(e.target.patientName.value).id,
                        "name": JSON.parse(e.target.patientName.value).name,
                        "diagnos": JSON.parse(e.target.diagnosName.value).name,
                        "healing": JSON.parse(e.target.healingName.value).name,
                        "note": e.target.note.value,
                        "date": e.target.date.value,
                        "time": {
                            "from": e.target.from.value,
                            "to": e.target.to.value
                        },
                        isAppointment,
                    }
                   
                    const patientId = JSON.parse(e.target.patientName.value).id;
                    const patientIdx = patients.findIndex(patient => patient.id === patientId);
                    patients[patientIdx].isTreated = true;
                    patients[patientIdx].visitCount++;
                    
                  
                    dispatch(newAppointmentThunk(newAppointment));
                    dispatch(updatePatientThunk(patientId, patients[patientIdx])); //?
                    setShowProp(false);
                    
                }catch (error) {
                    if (error.name === "SyntaxError") {
                        alert('Заполните все формы');
                    } else {
                        alert(error);
                    }
                }
            }else {
                try {
                    if (!e.target.from.value || !e.target.to.value) {
                        throw 'Назначьте время'
                    }
                    const newNote = {
                        "doctorId": Number(e.target.activeDoctor.value),
                        "name": e.target.name.value,
                        "note": e.target.note.value,
                        "date": e.target.date.value,
                        "time": {
                            "from": e.target.from.value,
                            "to": e.target.to.value
                        },
                        isAppointment,
                    }
                    dispatch(newAppointmentThunk(newNote));
                    setShowProp(false);
                }catch (error) {
                    if (error.name === "SyntaxError") {
                        alert('Заполните все формы');
                    } else {
                        alert(error);
                    }
                }
            }
        
    }

    return (
        <>
            <div>
                { isAppointment ? 
                    <div className="appointment__block">
                        <button className="button button-note" onClick={() => setIsAppointment((p) => p = !p)}>Заметка</button>
                        <button className="button_close" onClick={() => setShowProp(false)}></button>

                        <form className="appointment__form form" onSubmit={addAppointment} >
                            <input className="form__date" type="text" defaultValue={activeDay} name='date' disabled />
                            <input type="hidden" defaultValue={activeDoctor.id} name='activeDoctor' disabled />
                            <div className="flex">
                                <DropdownList usedData={patients} defaultText={'Пациент'} inputName={'patientName'} setVisit={setVisitNum} />
                                <input type="number" className="form__visit" value={visitNum} disabled />
                            </div>
                                <DropdownList usedData={visitDiagnosis} inputName={'diagnosName'} defaultText={'Диагноз'} />
                                <DropdownList usedData={visitHealings} inputName={'healingName'} defaultText={'Лечение'} />
                                <textarea type="text" className="form__notes form__notes-patient" placeholder='Заметки' name="note" />
                                <TimePicker freeTime={freeTime} chosenTime={chosenTime} className='dropdown__box-patient' />
                                <ToothPick chosenTooth={chosenTooth} setChosenTooth={setChosenTooth} />
                                <button type="submit" className="button">Отправить</button>
                        </form>
                    </div> : 
                    <div className="appointment__block">
                        <button onClick={() => setIsAppointment((p) => p = !p)} className='button' >Запись пациента</button>
                        <button className="button_close" onClick={() => setShowProp(false)}></button>

                    
                        <form className="appointment__form" onSubmit={addAppointment} >
                            <input className="form__date" type="text" defaultValue={activeDay} name='date' disabled />
                            <input type="hidden" defaultValue={activeDoctor.id} name='activeDoctor' disabled />
                            <input type="text" placeholder="Название" className="dropdown__box dropdown__box-note" name="name" defaultValue={''} required />
                            <textarea type="text" placeholder="Заметки" className="form__notes form__notes-note" name="note"  />
                            <TimePicker freeTime={freeTime} chosenTime={chosenTime} className='dropdown__box-note' />

                            <button type="submit" className="button button-note">Отправить</button>
                        </form>
                    </div>
                } 
            </div>
        </>
    );
}
 