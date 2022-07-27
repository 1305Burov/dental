import { useState } from "react";
import { Link } from 'react-router-dom';


export const GetWeek = () => {
    const [numWeek, setNumWeek] = useState(0);
    const week = [];
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];

    for (let i = 0 + numWeek; i < 7 + numWeek; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
            
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();
        const weekDay = `${days[day]} ${date.getDate()}, ${months[month]} ${year}`;

        week.push( 
            {
                dateStroke: i === 0 ? weekDay + ` (today)` : weekDay,
                date
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
                    return <Link to={`/day/${Date.parse(day.date)}`}  key={day.dateStroke}><li>{day.dateStroke}</li></Link>
                })}
            </ul>
            <button onClick={prevWeek}>prev</button>
            <button onClick={nextWeek}>next</button>   
        </>
    );
}


