import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { diagnosesSelector } from "../../store/diagnoses/selectors";
import { createDiagnosisThunk, deleteDiagnosisThunk, getDiagnosesThunk } from "../../store/diagnoses/thunk";

export const DiagnosesSettings = () => {
    const dispatch = useDispatch();
    const diagnoses = useSelector(diagnosesSelector);
    
    useEffect(() => {
        dispatch(getDiagnosesThunk());
    }, []);

 
    function addDiagnosis(e) {
        e.preventDefault();

        if (e.target.diagnosis.value.trim().length > 0) {
            const diagnosis = {
                name: e.target.diagnosis.value.trim(), 
                visitNumber: Number(e.target.visit.value.trim())
            }

            
            dispatch(createDiagnosisThunk(diagnosis));
        }
    }

    function deleteDiagnosis(id) {
        dispatch(deleteDiagnosisThunk(id));
    }

    return (
        <div>
            <span>Диагнозы:</span>
            <ul>
                {diagnoses.map((diagnosis, index) => {
                    return <li key={index} >
                            <span>{diagnosis.name}</span>
                            <p className="form__visit">{diagnosis.visitNumber}</p>
                            <button onClick={() => deleteDiagnosis(diagnosis.id)}>delete</button>
                            {diagnosis.id}
                        </li>    
                })}
            </ul>
            <form onSubmit={addDiagnosis}>
                <input type="text" name="diagnosis" placeholder="Новый диагноз" />
                <input className="form__visit" type="number" min={1} name="visit" defaultValue={1} />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

