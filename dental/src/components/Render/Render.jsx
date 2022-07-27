import { useEffect, useState } from "react";
import Input from "../Input/Input";


export default function Render() {
    const [patient, setPatient] = useState(true);
    const [notice, setNotice] = useState(false);
    const [loading, setloading] = useState(false);
    
    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 200)
    }, [patient])

    function f1() {
        setPatient(true);
        setNotice(false);     
    }
    
    function f2() {
        setNotice(true);
        setPatient(false);
    }

    return (
        <>
            <button onClick={f1}>Пациент</button>
            <button onClick={f2}>Напоминание</button>
            { 
                loading ? <p>loading...</p> 
                : patient ? <Input placeholder={'patient'} /> 
                : notice ? <Input placeholder={'notice'} /> : ''
            } 
        </>
    );
}

