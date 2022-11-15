import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { appointmentsSelector } from "../../store/appointments/selectors";
import { getTodaysAppointmentsThunk } from "../../store/appointments/thunk";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";
import { OpenAppointment } from "../OpenAppointment/OpenAppointment";

export const Schedual = ({date}) => {
    const appointments = useSelector(appointmentsSelector);
    const activeDoctor = useSelector(activeDoctorSelector); 
    const dispatch = useDispatch();

    const [showAppointmentForm, setShowAppointmentForm] = useState(false);
    const [OpenAppointmentData, setOpenAppointmentData] = useState({});
    const [chosenTime, setchosenTime] = useState('');
    
    useEffect(() => {
        dispatch(getTodaysAppointmentsThunk(date, activeDoctor._id));
    }, [])

    useEffect(() => {
        dispatch(getTodaysAppointmentsThunk(date, activeDoctor._id));
    }, [activeDoctor, date, OpenAppointmentData])
    
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


    // const todaysAppointments = activeDoctor.name ? appointments.filter(appoitment => {

    //         if (appoitment.date === date && activeDoctor._id === appoitment.doctorId) return appoitment;
    //     }): [];


        const timeWithAppointments = timeArr.reduce((readyTime, time, i) => {
            appointments.map((app) => {
            if (time === app.time.from) {
                time = app.isAppointment ? [ {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isAppointment,
                        id: app._id,
                        app
                    } ]
                    : [ {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isAppointment,
                        id: app._id,
                        app
                    } ]
                while(timeArr[i + 1] !== app.time.to) {
                    // timeArr[i + 1] = {
                    //     time: `${timeArr[i + 1]}`, 
                    //     name: '',
                    //     type: app.isAppointment,
                    //     id: app.id,
                    //     app
                    // };
                    time.push(`${timeArr[i + 1]}`)
                    delete timeArr[i + 1];
                    i++;  
                }
                time.push(`${timeArr[i + 1]}`);
                delete timeArr[i + 1];

                // timeArr[i + 1] = {
                //     time: `${timeArr[i + 1]}`,
                //     name: '',
                //     type: app.isAppointment,
                //     id: app.id,
                //     app
                // }
            }
        })
        readyTime.push(time);

        return readyTime;
    }, []) ;
    
    const freeTime = [];

    return (
        <div className="schedual">
            {timeWithAppointments.map((time, index) => {
                if (typeof time === 'object') {
                    return <div onClick={() => {setOpenAppointmentData(p => p = time[0].app)}} className={time[0].type ? 'engaged-patient' : 'engaged-note' } key={time[0].id}>
                        { time.map((value) => {
                            if (typeof value === 'object') {
                                return <div key={value.time} className='schedual__time'>{value.time} {value.name && ` - ${value.name}`}</div>
                            }else {
                                return <div key={value} className='schedual__time' >{value}</div>
                            }
                        })}
                    </div>
                }else {
                    freeTime.push(time);
                    return typeof timeWithAppointments[index + 1] === 'object' || timeWithAppointments[index] === timeWithAppointments[timeWithAppointments.length - 1]
                    ? <div key={time} className='schedual__time' >{time}</div>
                    : <div key={time} className='schedual__time schedual__time-free' onClick={() => {setShowAppointmentForm(true); setchosenTime( p => p = time )} }>{time}</div>
                }
            })}

            {/* {timeWithAppointments.map((time, index) => {
                if (typeof time === 'object') {
                    return time.type ? <div onClick={() => {setOpenAppointmentData(p => p = time.app)}}  key={time.time} className='schedual__time engaged-patient'>{time.time} {time.name && ` - ${time.name}`}</div>
                        : <div onClick={() => {setOpenAppointmentData(p => p = time.app)}} key={time.time} className='schedual__time engaged-note'>{time.time} {time.name && ` - ${time.name}`}</div>
                }else {
                    freeTime.push(time);
                    return typeof timeWithAppointments[index + 1] === 'object' || timeWithAppointments[index] === timeWithAppointments[timeWithAppointments.length - 1]
                        ? <div key={time} className='schedual__time' >{time}</div>
                        : <div key={time} className='schedual__time schedual__time-free' onClick={() => {setShowAppointmentForm(true); setchosenTime( p => p = time )} }>{time}</div> 
                }
            })}    */}
            
            {showAppointmentForm && <AppointmentForm freeTime={freeTime} setShowProp={setShowAppointmentForm} chosenTime={chosenTime} />}
            {OpenAppointmentData._id && <OpenAppointment app={OpenAppointmentData} setOpenAppointmentData={setOpenAppointmentData} />} 
        </div>
    );
}

 
