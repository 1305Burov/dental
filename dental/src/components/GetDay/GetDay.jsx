import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { DayString } from "../DayString/DayString";
import { Schedual } from "../Schedual/Schedual";

export const GetDay = () => {
    const navigate = useNavigate();
    const { dayInSeconds } = useParams();
    const [day, setDay] = useState( new Date( Number( dayInSeconds ) ));
    const formDay = `${day.getDate()} ${day.getMonth()} ${day.getFullYear()}`;
    
    function nextDate() {
        navigate(`/day/${day.setDate(day.getDate() + 1)}`)
    }

    function prevDate() {
        navigate(`/day/${day.setDate(day.getDate() - 1)}`)
    }

    function today() {
        setDay(p => p = new Date( Date.now() ));
        navigate(`/day/${Date.now()}`);
    }

    return (
        <div>
            <div className="flex controll">
                <button className="button controll__prev" onClick={prevDate}>Предыдущий</button>
                <span className="controll__date"> <DayString date={day} /> </span>
                <button className="button controll__next" onClick={nextDate}>Следующий</button>
                <button className="button controll__today" onClick={today}>Сегодня</button>
            </div>
            {formDay && <Schedual date={formDay} />}
        </div>
    );
}

