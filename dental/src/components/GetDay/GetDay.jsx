import { useState } from "react";

export const GetDay = () => {
    const [day, setDay] = useState(new Date);
    
    function nextDate() {
        setDay(p => p = new Date( p.setDate(p.getDate() + 1) ));
    }

    function prevDate() {
        setDay(p => p = new Date( p.setDate(p.getDate() - 1)));
    }

    return (
        <div>
            {day.getDate()}
            <button onClick={nextDate}>next</button>
            <button onClick={prevDate}>prev</button>
        </div>
    );
}

