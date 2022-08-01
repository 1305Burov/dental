import { useState } from "react";
import { Link } from 'react-router-dom';
import { DayString } from "../DayString/DayString";

export const GetWeek = () => {
    const [numWeek, setNumWeek] = useState(0);
    const week = [];
   
    for (let i = 0 + numWeek; i < 7 + numWeek; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        
        week.push( 
            {
                date,
            }
        );
    }

    function nextWeek() {
        setNumWeek(p => p + 7)
    }

    function prevWeek() {
        setNumWeek(p => p - 7)
    }

    
    return (
        <>
            <ul>
                {week.map((day) => {
                    return <Link to={`/day/${Date.parse(day.date)}`}  key={day.date}>
                            <li>
                                <DayString date={day.date} />
                                {String(new Date()) === String(day.date) ? ' today' : '' } 
                            </li>
                        </Link>
                })}
            </ul>
            <button onClick={prevWeek}>prev</button>
            <button onClick={nextWeek}>next</button>   
        </>
    );
}


