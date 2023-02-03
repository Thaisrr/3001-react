import { Outlet} from "react-router-dom";
import SubNav from "../../layout/SubNav";

const Ajax = () => {
    const links = [
        {text: 'Promesses', path: 'promise'},
        {text: 'Requêtes', path: 'requests'}
    ]

    return (
        <>
            <SubNav links={links}/>
            <Outlet/>
        </>
    )
}
export default Ajax
