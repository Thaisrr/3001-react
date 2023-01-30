import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

const Navigation = () => {
    const links = [
        {name: 'Présentation', path: '/'},
        {name: 'Conditionnel', path: '/affichage-conditionnel'},
        {name: 'Tableau', path: '/affichage-listes'},
        {name: 'Réactivité', path: '/reactivity'}
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
