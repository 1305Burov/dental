import { Calendar } from './components/Calendar/Calendar';
import { Header } from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { PatientCard } from './components/PatientCard/PatientCard';
import { CreatePatient } from './components/CreatePatient/CreatePatient';
import { Settings } from './components/Settings/Settings';

export default function App() {
    
    return (
        <>  
            <Header/>
            <Routes>
                <Route path="*" element={ <Calendar /> } />
                <Route path="patient/:patientId" element={ <PatientCard/> } />
                <Route path="create-patient" element={ <CreatePatient />} />
                <Route path="settings" element={ <Settings /> } />
            </Routes>
        </>
    ) 
    
}
