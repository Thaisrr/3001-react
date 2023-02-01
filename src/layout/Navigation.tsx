import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

const Navigation = () => {
    const links = [
        {name: 'Présentation', path: '/'},
        {name: 'Conditionnel', path: '/affichage-conditionnel'},
        {name: 'Tableau', path: '/affichage-listes'},
        {name: 'Réactivité', path: '/reactivity'},
        {name: 'Props', path: '/props'},
        {name: 'Formulaires', path: '/forms'},
        {name: 'Classe', path: '/classe'},
        {name: 'Cycle de Vie', path: '/life'},
        {name: 'Memoization', path: '/memo'},
        {name: 'Reducer', path: '/reducer'},
        {name: 'Contexte', path: '/contexte'},
    ];

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
            </ul>
        </nav>
    )
}
export default Navigation;
