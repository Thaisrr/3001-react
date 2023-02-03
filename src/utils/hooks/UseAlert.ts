import {Alert, AlertDuration, AlertLevel} from "../types/Alert";
import {createAlerte, removeAlerte} from "../../store/AlertSlice";
import {useAppDispatch} from "./UseStore";

export const useAlert = () => {
    const dispatch = useAppDispatch();

    return (text: string, level: AlertLevel = 'neutral', duration: AlertDuration = 5000) => {
        const alerte: Alert = {text, level, duration};
        dispatch(createAlerte(alerte));

        setTimeout(() => {
            dispatch(removeAlerte(alerte))
        }, duration)
    }
}
