import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { appointmentsSelector } from "../../store/appointments/selectors";
import { getAppointmentThunk, getTodaysAppointmentsThunk } from "../../store/appointments/thunk";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const Schedual = ({date}) => {
    const appointments = useSelector(appointmentsSelector);
    const activeDoctor = useSelector(activeDoctorSelector); 
    const dispatch = useDispatch();
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [chosenTime, setchosenTime] = useState('');
   
    useEffect(() => {
        dispatch(getActiveDoctor())
    }, [])

    useEffect(() => {
        dispatch(getTodaysAppointmentsThunk(date, activeDoctor.id));
        // dispatch(getAppointmentThunk());
    }, [activeDoctor, date])
    

    let timeArr = [], h, m;
    const from = 7;
    const to = 20;

    for (h = from; h <= to; h++) {
        if (h !== to) {
            for (m = 0; m < 4; m++) {
                timeArr.push(h + ":" + (m === 0 ? "00" : 15 * m) );
            }
        } else {
            timeArr.push(h + ":" + "00" );
        }
    }


    // const todaysAppointments = activeDoctor.doctorName ? appointments.filter(appoitment => {
    //     if (appoitment.date === date && activeDoctor.id === appoitment.doctorId) return appoitment;
    // }): [];

    const timeWithAppointments = timeArr.reduce((readyTime, time, i) => {
        appointments.map((app) => {
            if (time === app.time.from) {
                time = app.isAppointment ? {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isAppointment,
                        id: app.id
                    }
                    : {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isAppointment,
                        id: app.id
                    }
                while(timeArr[i + 1] !== app.time.to) {
                    timeArr[i + 1] = {
                        time: `${timeArr[i + 1]}`, 
                        name: '',
                        type: app.isAppointment,
                        id: app.id 
                    };
                    i++;  
                }
                timeArr[i + 1] = {
                    time: `${timeArr[i + 1]}`,
                    name: '',
                    type: app.isAppointment,
                    id: app.id 
                }
            }
        })

        readyTime.push(time)
        return readyTime;
    }, []) ;
    
    let freeTime = [];

    return (
        <div className="schedual">
            {timeWithAppointments.map((time, index) => {
                if (typeof time === 'object') {
                    return time.type ? <Link to={`/appointment/${time.id}`}  key={time.time} className='schedual__time engaged-patient'>{time.time} {time.name && ` - ${time.name}`}</Link>
                        : <Link to={`/appointment/${time.id}`} key={time.time} className='schedual__time engaged-note'>{time.time} {time.name && ` - ${time.name}`}</Link>
                }else {
                    freeTime.push(time);
                    return typeof timeWithAppointments[index + 1] === 'object' || timeWithAppointments[index] === timeWithAppointments[timeWithAppointments.length - 1]
                        ? <div key={time} className='schedual__time' >{time}</div>
                        : <div key={time} className='schedual__time schedual__time-free' onClick={() => {setShowAppointmentForm(true); setchosenTime( p => p = time )} }>{time}</div> 
                }
            })}   

            {showAppointmentForm && <AppointmentForm freeTime={freeTime} setShowProp={setShowAppointmentForm} chosenTime={chosenTime} />}
        </div>
    );
}

 
