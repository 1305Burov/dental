import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DiagnosesSettings } from "../DiagnosesSettings/DiagnosesSettings";
import { DoctorsSettings } from "../DoctorsSettings/DoctorsSettings";
import { HealingsSettings } from "../HealingsSettings/HealingsSettings";

export const Settings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>  
           <button onClick={() => navigate(-1)}>Назад</button>
            <DoctorsSettings />

            <DiagnosesSettings />
            <HealingsSettings />
        </>
    );
}


