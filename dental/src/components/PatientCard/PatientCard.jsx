import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { patientsSelector } from "../../store/patients/selectors";
import { removePatientThunk, updatePatientThunk } from "../../store/patients/thunk";
import { ToothPick } from "../ToothPick/ToothPick";
import { VisitHistory } from "../VisitHistory/VisitHistory";


export const PatientCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const patients = useSelector(patientsSelector);
    const { patientId } = useParams();
    
    const [isUpdating, setIsUpdating] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [InputBirthdate, setInputBirthdate] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputAllergy, setInputAllergy] = useState('');
    const [chosenTooth, setChosenTooth] = useState('');


    const patientIdx = patients.findIndex(patient => patient.id === Number(patientId))

    useEffect(() => {
        patients.length === 0 && navigate(-1);
    }, []);


    useEffect(() => {
        if (patients.length > 0) {
            setInputName(p => p = patients[patientIdx].name);
            setInputBirthdate(p => p = patients[patientIdx].birthdate);
            setInputAddress(p => p = patients[patientIdx].address);
            setInputPhone(p => p = patients[patientIdx].phone);
            setInputNote(p => p = patients[patientIdx].notes);
            patients[patientIdx].allergy && setInputAllergy(p => p = patients[patientIdx].allergy);
        }
    }, [isUpdating]);


    function deleteAppointment() {
        dispatch(removePatientThunk(patientId));
        navigate(-1);
    }

    function updatePatient(e) {
        e.preventDefault();

        const updatedData = {
            name: e.target.name.value,
            birthdate: e.target.birthdate.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            notes: e.target.note.value,
            allergy: e.target.allergy.value
        }

        dispatch(updatePatientThunk(patientId, updatedData));
        navigate(-1);
    }

    return ( 
        patients.length > 0 && 
            <main className="patient-card">  
                <button className="button_back" onClick={() => navigate(-1)}></button>
                <div className="flex">
                    <div className="patient-card__wrapper">
                        <div className="patient-card__info">
                            <div className="patient-card__status">Статус: {patients[patientIdx].isTreated ? 'Лечится' : 'Здоров'}</div>
                            {patients[patientIdx].isTreated && <button className="button_status" onClick={() => {dispatch(updatePatientThunk(patientId, {isTreated: false, visitCount: 1}))}}>Закончить лечение</button>}
                        </div>
                        <div className="patient-card__info">
                            <div className="patient-card__id">{`#${ patients[patientIdx].id}`}</div>
                            <div className="patient-card__visit visit">
                                <button className="button button_small" onClick={() => {dispatch(updatePatientThunk(patientId, {visitCount: patients[patientIdx].visitCount + 1}))}}>+</button>   
                                <button className="button button_small" onClick={() => {dispatch(updatePatientThunk(patientId, {visitCount: patients[patientIdx].visitCount > 1 ? patients[patientIdx].visitCount - 1 : 1}))}}>-</button>   
                                <div className="visit__count">{patients[patientIdx].visitCount}</div>
                            </div>
                        </div>
                        
                        <form className="patient-card__form form" onSubmit={updatePatient} >
                            <label>
                                Имя:
                                <input className="form__input" type="text" value={inputName} name="name" disabled={!isUpdating} />
                            </label>
                            <label>
                                Дата рождения:
                                <input className="form__input" type="text" value={InputBirthdate} onChange={e => setInputBirthdate(e.target.value)} name="birthdate" disabled={!isUpdating} />
                            </label>
                            <label>
                                Адрес:
                                <input className="form__input" type="text" value={inputAddress} onChange={e => setInputAddress(e.target.value)} name="address" disabled={!isUpdating} />
                            </label>
                            <label>
                                Телефон:
                                <input className="form__textarea" type="number" value={inputPhone} onChange={e => setInputPhone(e.target.value)} name="phone" disabled={!isUpdating} />
                            </label>
                            <label>
                                Заметки:
                                <textarea className="form__textarea" type="number" value={inputNote} onChange={e => setInputNote(e.target.value)} name="note" disabled={!isUpdating} />
                            </label>
                            <label>
                                Аллергия:
                                <textarea className="form__textarea" type="number" value={inputAllergy} onChange={e => setInputAllergy(e.target.value)} name="allergy" disabled={!isUpdating} />
                            </label>

                            {isUpdating && <button type="submit">Изменить</button>}
                        </form>
                        <div className="patient-card__buttons">
                            <button className="button" onClick={() => {setIsUpdating(p => !p)}}>{isUpdating ? 'Отмена' : 'Редактировать'}</button>
                            <button className="button_delete" onClick={() => {deleteAppointment()}}>Удалить</button>
                        </div>
                    </div>
                    <div style={ {maxWidth: '650px', margin: '0 0 0 32px'} }>
                        <button className="button_small" onClick={() => {setChosenTooth('')}}>Все</button>
                        <ToothPick chosenTooth={chosenTooth} setChosenTooth={setChosenTooth} />
                        <VisitHistory id={patientId} teethId={chosenTooth} />
                    </div>
                </div>
            </main> 
    ) 

}


