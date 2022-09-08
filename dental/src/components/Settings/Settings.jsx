import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DiagnosesSettings } from "../DiagnosesSettings/DiagnosesSettings";
import { DoctorsSettings } from "../DoctorsSettings/DoctorsSettings";
import { HealingsSettings } from "../HealingsSettings/HealingsSettings";

export const Settings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <section className="settings">  
           <button className="button_back" onClick={() => navigate(-1)}></button>

            <DoctorsSettings />
            <DiagnosesSettings />
            <HealingsSettings />
        </section>
    );
}


