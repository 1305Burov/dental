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
            <div>
                <button onClick={() => setAddDoc((p) => p = !p) }>{addDoc ? 'Отменить' : 'Добавить доктора'}</button>
                {!addDoc && !delDoc && <button onClick={() => setDelDoc((p) => p = !p) } >Удалить доктора</button>}
            </div>

            {
                addDoc && 
                <form onSubmit={createDoctor}>
                    <input type="text" name="doctor" />
                    <button type="submit">Добавить</button>
                </form>
            }

            {
                delDoc && 
                <div>
                    <form onSubmit={deleteDoctor}>
                        <p>Вы точно хотите удалить {doctor.doctorName}?</p>
                        <button type="submit">Да</button>
                        <button type="button" onClick={() => setDelDoc(false) }>Отмена</button>
                    </form>
                </div>
            }
                
            
        </>

    );
}

 
