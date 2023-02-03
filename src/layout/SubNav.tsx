import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

type Links = {
    path: string,
    text: string
}
type NavProp = {links: Links[]}
const SubNav = ({links}: NavProp) => {

    return (
        <nav className='Nav'>
            <ul>
                {
                    links.map(l => (
                        <li key={l.text}>
                            <NavLink to={l.path} end={l.path === ''}>{l.text}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default SubNav
