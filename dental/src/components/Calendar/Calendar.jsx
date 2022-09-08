import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { GetDay } from '../GetDay/GetDay';
import { GetPatients } from '../GetPatients/GetPatients';
import { GetWeek } from '../GetWeek/GetWeek';

export const Calendar = () => {
    const location = useLocation();

    return (
        <div className='flex wrapper'>
            <div className="calendar">  
                <div className='calendar__link-wrapper'>{location.pathname === '/' ? <Link className='link button_small' to={`day/${Date.now()}`}>День</Link> : <Link className='link button_small' to="/">Неделя</Link> }</div>
                <Routes>
                    <Route path="/" element={ <GetWeek /> } />
                    <Route path="day/:dayInSeconds" element={ <GetDay /> } />
                </Routes>
            </div>
            
            <GetPatients /> 
        </div>
    );
}

