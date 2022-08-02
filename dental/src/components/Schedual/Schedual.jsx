import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveDoctor } from "../../store/activeDoctor/actionCreators";
import { activeDoctorSelector } from "../../store/activeDoctor/selectors";

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
            patientName: 'Alex',
            date: '1 7 2022',
            time: {
                from: '9:15',
                to: '10:30'
            }
        },
        {
            id: 2,
            doctorId: 1,
            patientName: 'Alex Novac',
            date: '2 7 2022',
            time: {
                from: '8:15',
                to: '8:30'
            }
        },
        {
            id: 3,
            doctorId: 0,
            patientName: 'Igor Government',
            date: '2 7 2022',
            time: {
                from: '15:15',
                to: '18:00'
            }
        },
        {
            id: 4,
            doctorId: 0,
            patientName: 'Vasya Kent',
            date: '2 7 2022',
            time: {
                from: '10:15',
                to: '15:00'
            }
        }
    ]

    let timeArr = [], h, m;
    const from = 8;
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

    const todaysAppointments = appoitments.filter(appoitment => {
        if (appoitment.date === date) return appoitment;
    })

    
    const timeWithAppointments = activeDoctor.doctorName ? timeArr.reduce((readyTime, time, i) => {
        todaysAppointments.map((app) => {
            if (activeDoctor.id === app.doctorId) {
                if (time === app.time.from) {
                    time = time + ' - ' + app.patientName;
                    while(timeArr[i + 1] !== app.time.to) {
                        timeArr[i + 1] += ' ========';
                        i++;  
                    }
                    timeArr[i + 1] += ' - ' +  app.patientName
                }
            }
        })
        readyTime.push(time)
        return readyTime;
    }, []) : [];
    

    return (
        <div className="schedual">
            {timeWithAppointments.map(time => {
                return <div key={time}>{time}</div>
            })}   
        </div>
    );
}

 
