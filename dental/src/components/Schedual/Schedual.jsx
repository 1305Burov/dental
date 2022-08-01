export const Schedual = ({date}) => {
    const appoitments = [
        {
            id: 1,
            doctorId: 1,
            patientName: 'Alex',
            date: '1 7 2022',
            time: '9:15'
        },
        {
            id: 2,
            doctorId: 1,
            patientName: 'Alex Novac',
            date: '2 7 2022',
            time: '10:30'
        },
        {
            id: 3,
            doctorId: 1,
            patientName: 'Igor Goverment',
            date: '2 7 2022',
            time: '18:30'
        },
        {
            id: 4,
            doctorId: 1,
            patientName: 'Vasya Kent',
            date: '2 7 2022',
            time: '11:30'
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

    const timeWithAppointments = timeArr.reduce((readyTime, time) => {
        todaysAppointments.map((app) => {
            if (time === app.time) {
                time = time + ' - ' + app.patientName;
            }
        })
        readyTime.push(time)
        return readyTime;
    }, [])

    return (
        <div>
            {timeWithAppointments.map(time => {
                return <div key={time}>{time}</div>
            })}   
        </div>
    );
}

 
