import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';
import {useLogout} from "../utils/hooks/UseAuth";
import {useAppSelector} from "../utils/hooks/UseStore";

const Navigation = () => {
    const logout = useLogout();
    const links = [
        {name: 'Présentation', path: '/'},
        {name: 'Conditionnel', path: '/affichage-conditionnel'},
        {name: 'Tableau', path: '/affichage-listes'},
        {name: 'Réactivité', path: '/reactivity'},
        {name: 'Props', path: '/props'},
        {name: 'Formulaires', path: '/forms'},
        {name: 'Hooks', path: '/hooks'},
        {name: 'Ajax', path: '/ajax'}
    ];

    const LoggedIn = () => (
        <>
            <li>
                <NavLink to='/pokedex'>Pokédex</NavLink>
            </li>
            <li>
                <button onClick={() => logout()}>Logout</button>
            </li>
        </>
    )

    const Anonymous = () => (
        <>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </>
    )

    /***** Store ********/
    //const [isAuth, setIsAuth] = useState(isLogged());
    const isAuth = useAppSelector(state => state.user.isLogged);

    return (
        <nav className='Nav'>
            <ul>
                {
                    links.map(l => (
                        <li key={l.name}>
                            <NavLink to={l.path} >{l.name}</NavLink>
                        </li>
                    ))
                }
                {isAuth? <LoggedIn/> : <Anonymous/>}
            </ul>
        </nav>
    )
}
export default Navigation;
