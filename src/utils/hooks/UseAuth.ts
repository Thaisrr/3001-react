import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {useLocation, useNavigate} from "react-router-dom";
import {useAlert} from "./UseAlert";
import {User} from "../types/User";
import {setLogged, setLogout} from "../../store/UserSlice";
import {authenticate, inscription, logout} from "../services/AuthenticationService";
import {useAppDispatch} from "./UseStore";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const createAlert = useAlert();

    return async (userAuth: User) => {
        try {
            await authenticate(userAuth);
            dispatch(setLogged());
            createAlert('Welcome back !', 'ok');
            navigate('/pokedex');
            return true;
        } catch (e: string | any ) {
            createAlert(e, 'error' );
            return false
        }
    }
}

export const useRegister = () => {
    const createAlert = useAlert();
    return async (userAuth: User) => {
        try {
            await inscription(userAuth);
            createAlert('Vous pouvez maintenant vous connecter !')
        } catch (e: any) {
            createAlert(e, 'error');
            return false;
        }
     }
}

export const useLogout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const createAlerte = useAlert();
    return () => {
        logout();
        dispatch(setLogout());
        createAlerte('Bye !');
        if(location.pathname.includes('pokedex')) {
            navigate('/');
        }
    }
}
