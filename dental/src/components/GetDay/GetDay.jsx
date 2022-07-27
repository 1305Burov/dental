import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";


export const GetDay = () => {
    const navigate = useNavigate();
    const { dayInSeconds } = useParams();
    const [day, setDay] = useState( new Date( Number( dayInSeconds ) ));
    
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
            {day.getDate()}
            <br/>
            {day.getMonth()}
            <br/>
            <button onClick={prevDate}>prev</button>
            <button onClick={nextDate}>next</button>
            <button onClick={today}>Today</button>
        </div>
    );
}

