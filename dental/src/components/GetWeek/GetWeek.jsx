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
            <div className="flex controll">
                <button className="button" onClick={prevWeek}>Предыдущая</button>
                <button className="button" onClick={nextWeek}>Следующая</button>   
            </div>
            <ul className="week">
                {week.map((day) => {
                    return <li className={`week__day ${String(new Date()) === String(day.date) ? 'week__day_today' : '' }`} key={day.date}><Link className="link week__link" to={`/day/${Date.parse(day.date)}`}  >
                            <DayString date={day.date} /> 
                        </Link></li>
                })}
            </ul>
        </>
    );
}


