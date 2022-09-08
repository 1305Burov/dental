import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { createPatientThunk } from "../../store/patients/thunk";

export const CreatePatient = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector); 
    const [allergyInput, setAllergyInput] = useState(false);
    
    function createNewPatient(e) {
        e.preventDefault();
        
        const formDate = {
            doctorId: activeDoctor.id,
            name: e.target.name.value,
            birthdate: e.target.birthdate.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            notes: e.target.notes.value,
            allergy: allergyInput && e.target.allergy.value,
            isTreated: false,
            visitCount: 1
        }
        
        dispatch(createPatientThunk(formDate));
        navigate(-1);
    }

    return (
        <main className="create-patient">
            <button className="button_back" onClick={() => navigate(-1)}></button>
            <form className="create-patient__form form" onSubmit={createNewPatient}>
                <label>
                    ФИО
                    <input className="form__input" type="text" name="name" placeholder="ФИО" required />
                </label>
                <label>
                    Дата рождения
                    <input className="form__input" type="text" name="birthdate" placeholder="Дата рождения" />
                </label>
                <label>
                    Адрес
                    <input className="form__input" type="text" name="address" placeholder="Адрес" />
                </label>
                <label>
                    Номер телефона
                    <input className="form__input" type="number" name="phone" placeholder="Номер телефона" defaultValue={380} />
                </label>
                <label>
                    Заметки
                    <textarea className="form__textarea" type="text" name="notes" placeholder="Заметки"  />
                </label>
                <label>
                    Аллергия
                    <input className="form__checkbox" type="checkbox" onChange={() => { setAllergyInput(p => p = !p) }} />
                    { allergyInput && <textarea className="form__textarea" type="text" name="allergy" placeholder="Аллергия" /> }
                </label>

                <button className="form__submit" type="submit">Добавить пациента</button>
            </form>
        </main>
    );
}

 
