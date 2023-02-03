import {Alert} from "../utils/types/Alert";
import '../styles/Alert.css';
import {useAppSelector} from "../utils/hooks/UseStore";

const AlertContainer = () => {
    const alertes: Alert[] = useAppSelector((state) => state.alert);

    const AlerteCard = (alert: Alert) => (
        <div className={`alert ${alert.level}`}>
            {alert.text}
        </div>
    );

    return (
        <>
            {alertes?.length && (
                <div className='alert-container'>
                    {alertes.map((a, i) => <AlerteCard {...a} key={Math.random()} />)}
                </div>
            )}
        </>
    )
}
export default AlertContainer;
