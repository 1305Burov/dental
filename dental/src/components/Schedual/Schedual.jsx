import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";
import { AppointmentForm } from "../AppointmentForm/AppointmentForm";

export const Schedual = ({date}) => {
    const dispatch = useDispatch();
    const activeDoctor = useSelector(activeDoctorSelector);

    useEffect(() => {
        dispatch(getActiveDoctor())
    }, [])

    const appoitments = [
        {
            id: 1,
            doctorId: 1,
            name: 'Alex',
            date: '1 7 2022',
            isNote: false,
            time: {
                from: '9:15',
                to: '10:30'
            }
        },
        {
            id: 2,
            doctorId: 1,
            name: 'Alex Novac',
            date: '2 7 2022',
            isNote: false,
            time: {
                from: '8:15',
                to: '8:30'
            }
        },
        {
            id: 3,
            doctorId: 0,
            name: 'Igor Government',
            date: '2 7 2022',
            isNote: false,
            time: {
                from: '15:15',
                to: '18:00'
            }
        },
        {
            id: 4,
            doctorId: 0,
            name: 'Отдохнуть...',
            date: '2 7 2022',
            isNote: true,
            time: {
                from: '10:15',
                to: '15:00'
            }
        },
        {
            id: 5,
            doctorId: 0,
            name: 'Something else',
            date: '2 7 2022',
            isNote: false,
            time: {
                from: '7:15',
                to: '8:00'
            }
        }
    ]

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

    const todaysAppointments = activeDoctor.doctorName ? appoitments.filter(appoitment => {
        if (appoitment.date === date && activeDoctor.id === appoitment.doctorId) return appoitment;
    }): [];

    const timeWithAppointments = timeArr.reduce((readyTime, time, i) => {
        todaysAppointments.map((app) => {
            if (time === app.time.from) {
                time = app.isNote ? {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isNote
                    }
                    : {
                        time: `${time}`, 
                        name: app.name,
                        type: app.isNote
                    }
                while(timeArr[i + 1] !== app.time.to) {
                    timeArr[i + 1] = {
                        time: `${timeArr[i + 1]}`, 
                        name: '',
                        type: app.isNote 
                    };
                    i++;  
                }
                timeArr[i + 1] = {
                    time: `${timeArr[i + 1]}`,
                    name: '',
                    type: app.isNote 
                }
            }
        })

        readyTime.push(time)
        return readyTime;
    }, []) ;
    
    let freeTime = [];

    return (
        <div className="schedual">
            {timeWithAppointments.map(time => {
                if (typeof time === 'object') {
                    return time.type ? <div key={time.time} className='engaged-note'>{time.time} {time.name && ` - ${time.name}`}</div>
                        : <div key={time.time} className='engaged-patient'>{time.time} {time.name && ` - ${time.name}`}</div>
                }else {
                    freeTime.push(time);
                    return <div key={time}>{time}</div>
                }
            })}   
            
            <AppointmentForm freeTime={freeTime} />
        </div>
    );
}

 
