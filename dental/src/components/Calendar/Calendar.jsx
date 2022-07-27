import { useState } from "react";
import { GetDay } from "../GetDay/GetDay";
import { GetWeek } from "../GetWeek/GetWeek";

export const Calendar = () => {
    const [isWeek, setIsWeek] = useState(true);
    
    function renderWeek() {
        setIsWeek( p => p = true )
    }

    function renderDay() {
        setIsWeek( p => p = false )
    }
    
    return (
        <>  
            <button onClick={ renderWeek }>Week</button>
            <button onClick={ renderDay }>Day</button>
            { isWeek ? <GetWeek /> : <GetDay /> }            
        </>
    );
}

