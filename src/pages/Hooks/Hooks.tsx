import SubNav from "../../layout/SubNav";
import {Outlet} from "react-router-dom";

const Hooks = () => {

    const links = [
        {text: 'UseEffect', path: ''},

        {text: 'Classe Component', path: 'classe'},
        {text: 'Memoïzation', path: 'memo'},
        {text: 'Reducer', path: 'reducer'},
        {text: 'Contexte', path: 'contexte'}
    ]

    return (
        <>
            <SubNav links={links}/>
            <Outlet/>
        </>
    )
}
export default Hooks
