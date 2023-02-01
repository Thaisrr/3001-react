import {useEffect} from "react";

type Props = {
    count: number
}
const CycleChild = ({count}: Props) => {
    console.log('%c[CHILD] execution de la fonction', "color: rebeccapurple; background: white");

    useEffect(() => {
        console.log('%c[CHILD] useEffect []', "color: rebeccapurple; background: white");

    }, []);

    useEffect(() => {
        console.log('%c[CHILD] count props updated', "color: rebeccapurple; background: white");
    }, [count])


    return (
        <section>
            <h2>CycleChild</h2>

            <p>Parent count : {count}</p>
        </section>
    )
}
export default CycleChild;
