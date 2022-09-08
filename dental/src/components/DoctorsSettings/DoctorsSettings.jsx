import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { doctorsSelector } from "../../store/doctors/selectors";
import { createDoctorThunk, deleteDoctorThunk } from "../../store/doctors/thunk";


export const DoctorsSettings = () => {
    const doctor = useSelector(activeDoctorSelector);
    const doctors = useSelector(doctorsSelector);
    const dispatch = useDispatch();

    const [addDoc, setAddDoc] = useState(false);
    const [delDoc, setDelDoc] = useState(false);
    

    function createDoctor(e) {
        e.preventDefault();
        const doctor = {
            doctorName: e.target.doctor.value.trim()
        }

        doctor.doctorName.length > 0 && dispatch(createDoctorThunk(doctor))
        setAddDoc(false);
    }
    
    function deleteDoctor(e) {
        e.preventDefault();
        dispatch(deleteDoctorThunk(doctor.id));
        dispatch(setActiveDoctor(doctors[0]));
        setDelDoc(false);
    }

    return (
        <>
            <div className="settings__doctor">
                <button className="button" onClick={() => setAddDoc((p) => p = !p) }>Добавить доктора</button>
                <button className="button" onClick={() => setDelDoc((p) => p = !p) } >Удалить доктора</button>
            </div>

            {
                addDoc && 
                <div>
                    <div className="overflow"></div>
                    <form className="settings__form" onSubmit={createDoctor}>
                        <input type="text" name="doctor" placeholder="Введите имя"/>
                        <button className="button" type="submit">Добавить</button>
                        <button className="button button_delete" type="button" onClick={() => setAddDoc(false) }>Отмена</button>
                    </form>
                </div>
            }

            {
                delDoc && 
                <div>
                    <div className="overflow"></div>
                    <form className="settings__form" onSubmit={deleteDoctor}>
                        <p>Вы точно хотите удалить <span>{doctor.doctorName}</span> !?</p>
                        <button className="button" type="submit">Да</button>
                        <button className="button button_delete" type="button" onClick={() => setDelDoc(false) }>Отмена</button>
                    </form>
                </div>
            }
                
            
        </>

    );
}

 
