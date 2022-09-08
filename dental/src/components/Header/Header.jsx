import { Link, useLocation } from 'react-router-dom';
import { GetDoctors } from '../GetDoctors/GetDoctors';

export const Header = () => {
    const location = useLocation();

    return (
        <header className='header'>
            <div className='header__box'>
                <GetDoctors />
                { location.pathname === '/settings' || location.pathname === '/create-patient' ? false : <Link className='link link_settings' to="settings">Настройки</Link> }    
            </div>
            { location.pathname === '/create-patient' || location.pathname === '/settings' ? false : <Link className='link link_patient' to="create-patient">Новый пациент</Link> }
        </header>
    );
}


