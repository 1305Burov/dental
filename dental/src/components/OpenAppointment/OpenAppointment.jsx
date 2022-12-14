import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAppointmentThunk, updateAppointmentThunk } from "../../store/appointments/thunk";
import { patientsSelector } from "../../store/patients/selectors";
import { updatePatientThunk } from "../../store/patients/thunk";

export const OpenAppointment = ({ app, setOpenAppointmentData }) => {
    const dispatch = useDispatch();
    const patients = useSelector(patientsSelector);

    const [isUpdating, setIsUpdating] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputDiagnos, setInputDiagnos] = useState('');
    const [inputHealing, setInputHealing] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [inputTeethId, setInputTeethId] = useState('');

    useEffect(() => {
        if (app._id) {
            setInputName(p => p = app.name);
            setInputDiagnos(p => p = app.diagnos);
            setInputHealing(p => p = app.healing);
            setInputNote(p => p = app.note);
            setInputTeethId(p => p = app.teethId);
        }
    }, [isUpdating]);
    
    function deleteAppointment() {
        if (app.isAppointment) {
            const patientId = app.patientId;
            const patientIdx = patients.findIndex(patient => patient._id === patientId);
            patients[patientIdx].visitCount--;
            
            dispatch(updatePatientThunk(patientId, patients[patientIdx]));
        }
        
        dispatch(removeAppointmentThunk(app._id));
        setOpenAppointmentData(p => p = {});
    }

    function updateAppointment(e) {
        e.preventDefault();
        if (app.isAppointment) {
            const updatedAppointment = {
                diagnos: e.target.diagnos.value,
                healing: e.target.healing.value,
                note: e.target.note.value,
                teethId: Number(e.target.teethId.value)
            }

            dispatch(updateAppointmentThunk(app._id, updatedAppointment));

        }else {
            const updatedAppointment = {
                name: e.target.name.value,
                note: e.target.note.value,
            }

            dispatch(updateAppointmentThunk(app._id, updatedAppointment));
        }

        setIsUpdating(p => p = false);
        setOpenAppointmentData(p => p = {});
    }

    return (
        <>
            <div className="overflow" onClick={() => {setOpenAppointmentData(p => p = {})}}></div>
            {app._id && 
                <div className="appointment__block">
                    <button className="button_close" onClick={() => {setOpenAppointmentData(p => p = {})}}></button>

                    <p>{app.date}</p>
                    <form className="appointment__form form" onSubmit={updateAppointment} >
                    {app.isAppointment ? 
                        <>
                            <label>
                                ??????:
                                <input className="form__input" type="text" value={inputName} disabled />
                            </label>
                            <label>
                                ??????????????:
                                <input className="form__input" type="text" value={inputDiagnos} onChange={e => setInputDiagnos(e.target.value)} name="diagnos" disabled={!isUpdating} />
                            </label>
                            <label>
                                ??????????????:
                                <input className="form__input" type="text" value={inputHealing} onChange={e => setInputHealing(e.target.value)} name="healing" disabled={!isUpdating} />
                            </label>
                            <label>
                                ??????????????:
                                <textarea className="form__textarea" type="text" value={inputNote} onChange={e => setInputNote(e.target.value)} name="note" disabled={!isUpdating} />
                            </label>
                            <label>
                                ??????:
                                <input className="form__input" type="number" value={inputTeethId} onChange={e => setInputTeethId(e.target.value)} name="teethId" disabled={!isUpdating} />
                            </label>
                        </>
                        : 
                        <>
                            <label>
                                ??????:
                                <input className="form__input form__input_note" type="text" value={inputName}  onChange={e => setInputName(e.target.value)} name='name' disabled={!isUpdating} />
                            </label>
                            <label>
                                ??????????????:
                                <textarea className="form__textarea form__textarea_note" value={inputNote} onChange={e => setInputNote(e.target.value)} name="note" disabled={!isUpdating} />
                            </label>
                        </>  
                    }
                       
                    
                        <p>?????????? ????????????:</p>
                        <input type="text" className="time" value={app.time.from} name="from" disabled />
                        ???
                        <input type="text" className="time" value={app.time.to} name="to" disabled />

                        {isUpdating && <button className="change__btn" type="submit">????????????????</button>}
                    </form>
                    <div className="flex">
                        <button className={`button ${app.isAppointment ? '' : 'button-note'} ${!isUpdating ? '' : 'button_active'}`} onClick={() => {setIsUpdating(p => !p)}}>{isUpdating ? '????????????' : '??????????????????????????'}</button>
                        <button className="button_delete" onClick={() => {deleteAppointment()}}>??????????????</button>
                    </div>
                </div>
            }
        </>        
    );
}


