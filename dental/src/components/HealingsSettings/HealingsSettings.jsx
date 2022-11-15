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
            
            e.target.reset();
            dispatch(createHealingThunk(healing))
        }
    
    }

    function deleteHealing(id) {
        dispatch(deleteHealingThunk(id));
    }
    

    return (
        <div>
            <span className="settings__section">Лечения:</span>
            <ul className="settings__list">
                {healings.map((healing) => {
                    return <li className="settings__item" key={healing._id} >
                            <span>{healing.name}</span>
                            <p className="form__visit">{healing.visitNumber}</p>
                            <button onClick={() => deleteHealing(healing._id)}>delete</button>
                        </li>    
                })}
            </ul>
            <form onSubmit={addHealing}>
                <input className="settings__input" type="text" name="healing" placeholder="Новое лечение" />
                <input className="form__visit" type="number" min={1} name="visit" defaultValue={1} />
                <button className="button_add" type="submit">Добавить</button>
            </form>
        </div>
    );
}

