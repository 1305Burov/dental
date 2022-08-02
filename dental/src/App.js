import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Calendar } from "./components/Calendar/Calendar";
import { GetDoctors } from "./components/GetDoctors/GetDoctors";
import { GetPatients } from './components/GetPatients/GetPatients';



 
export default function App() {
    
    return (
        <>
            <GetDoctors />
            <div className='flex'>
                <Calendar />
                <GetPatients />
            </div>
            {/* <Routes>
                <Route path="/doctors" element={ <GetDoctors /> } />
                <Route path="/calendar/*" element={ <Calendar /> } />
            </Routes>             */}
        </>
    ) 
    
}
