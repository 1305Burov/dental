import { Calendar } from './components/Calendar/Calendar';
import { Routes, Route } from 'react-router-dom';
import { OpenAppointment } from './components/OpenAppointment/OpenAppointment';

 
export default function App() {
    
    return (
        <>  
            <Routes>
                <Route path="*" element={ <Calendar /> } />
                <Route path="appointment/:appointmentId" element={ <OpenAppointment /> } />
            </Routes>
        </>
    ) 
    
}
