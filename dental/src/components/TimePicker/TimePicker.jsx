import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TimePicker = ({freeTime, chosenTime}) => {
    const { dayInSeconds } = useParams();

    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);
    const [inputValueFrom, setInputValueFrom] = useState('');
    const [inputValueTo, setInputValueTo] = useState('');
    
    useEffect(() => {
        setInputValueFrom(p => p = '');
        setInputValueTo(p => p = '');
    }, [dayInSeconds]);

    useEffect(() => {
        chosenTime && setInputValueFrom(p => p = chosenTime);
    }, [chosenTime]);


    const time = freeTime.filter((time, index) => {
        if (index + 1 < freeTime.length) {
            const h = Number(freeTime[index].split(':')[0]);
            const m = Number(freeTime[index].split(':')[1]);
          
            if (freeTime[index + 1] === `${h}:${m+15}` || freeTime[index + 1] === `${h + 1}:00`) {
                return freeTime[index];
            }
        }

    })
    
    const toTime = freeTime.filter((time, index) => {
        if (Number(time.replace(':', '')) > Number(inputValueFrom.replace(':', ''))) {
            return time;
        }
    })

    const ntoTime = toTime.filter((time, index) => {
        if (index + 1 < freeTime.length) {
            const h = Number(toTime[index].split(':')[0]);
            const m = Number(toTime[index].split(':')[1]);
          
            if (toTime[index + 1] === `${h}:${m+15}` || toTime[index + 1] === `${h + 1}:00`) {
                
            }else {
                return toTime.length = index + 1;
            }
        }
    })

    return (
        <div className='dropdown__timepicker-wrapper'>
            <input className="dropdown__timepicker" type="hidden" name="from" defaultValue={inputValueFrom} />
            <p>C:</p>
            <div className="dropdown__wrapper">
                <div className={`dropdown__box dropdown__box-patient ${isOpenFrom ? 'dropdown__box-open' : '' }`}  onClick={() => setIsOpenFrom(p => !p)} >{inputValueFrom}</div>
                {isOpenFrom && <ul className="dropdown__list list">
                    {
                        time && time.map(item => {
                            return <li onClick={() => setInputValueFrom(p => p = item, setIsOpenFrom(p => !p), setInputValueTo(p => p = '') ) } key={item}>{item}</li>
                        })
                    }
                </ul>}
            </div>
            <input className="dropdown__timepicker" type="hidden" name="to" defaultValue={inputValueTo} />
            <p>До:</p>
            <div className="dropdown__wrapper">
                <div className={`dropdown__box dropdown__box-patient ${isOpenTo ? 'dropdown__box-open' : '' }`}  onClick={() => setIsOpenTo(p => !p)} >{inputValueTo}</div>
                {isOpenTo && <ul className="dropdown__list list">
                    {
                        
                        toTime && toTime.map(item => {
                            return <li onClick={() => setInputValueTo(p => p = item, setIsOpenTo(p => !p)  ) } key={item}>{item}</li>
                        })
                    }
                </ul>}
            </div>
        </div>
    );
}

