import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { healingsSelector } from "../../store/healings/selectors";
import { createHealingThunk, deleteHealingThunk, getHealingsThunk } from "../../store/healings/thunk";

export const HealingsSettings = () => {
    const dispatch = useDispatch();
    const healings = useSelector(healingsSelector);
    
    useEffect(() => {
        dispatch(getHealingsThunk());
    }, []);

    function addHealing(e) {
        e.preventDefault();

        if (e.target.healing.value.trim().length > 0) {
            const healing = {
                name: e.target.healing.value.trim(), 
                visitNumber: Number(e.target.visit.value.trim())
            }

           dispatch(createHealingThunk(healing))
        }
    
    }

    function deleteHealing(id) {
        dispatch(deleteHealingThunk(id));
    }
    

    return (
        <div>
            <span>Лечения:</span>
            <ul>
                {healings.map((healing) => {
                    return <li key={healing.id} >
                            <span>{healing.name}</span>
                            <p className="form__visit">{healing.visitNumber}</p>
                            <button onClick={() => deleteHealing(healing.id)}>delete</button>
                        </li>    
                })}
            </ul>
            <form onSubmit={addHealing}>
                <input type="text" name="healing" placeholder="Новое лечение" />
                <input className="form__visit" type="number" min={1} name="visit" defaultValue={1} />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

