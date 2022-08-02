import { GetDay } from "../GetDay/GetDay";
import { GetWeek } from "../GetWeek/GetWeek";
import { Routes, Route, Link, useLocation } from 'react-router-dom';


export const Calendar = () => {
    const location = useLocation();
    return (
        <div className="calendar">  
            {location.pathname === '/' ? <Link to={`day/${Date.now()}`}>Day</Link> : <Link to="/">Week</Link> }
            <Routes>
                <Route path="/" element={ <GetWeek /> } />
                <Route path="day/:dayInSeconds" element={ <GetDay /> } />
            </Routes>
        </div>
    );
}

