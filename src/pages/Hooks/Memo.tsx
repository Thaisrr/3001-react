import {useMemo, useState} from "react";

const Memo = () => {
    const [notes, setNotes] = useState([14, 15, 12, 8, 10, 2]);
    const calc = () => {
        console.log('%c calcule long', "background: red");
        const sum = notes.reduce((sum, current) => sum + current, 0);
        return sum / notes.length;
    }
    const [moyenne, setMoyenne] = useState<number>(calc());


    const [times, setTimes] = useState([1, 23, 10, 23]);
    const addTime = () => {
        const new_time = Math.floor(Math.random() * (30 - 2)) + 1;
        setTimes([...times, new_time]);
    }

    const total_time = useMemo(() => {
        console.log('Memo - total time');
        return times.reduce((sum, el) => sum + el, 0);
    }, [times])

    const [count, setCount] = useState(0);

    return (
        <main>
            <h1>Memo</h1>

            <p>La Memoization permet à React de garder en mémoire des calcules / fonctions, et de ne les recréer que
                lorsque que les valeurs utilisées par la fonction, et surveillée par la fonction sont modifiées
            </p>

            <p>Il existe un Hook similaire, <i>useCallback</i></p>
            <p>UseCallback fonctionne de la même façon. La différence, c'est qu'on utilise useMemo comme une valeur, et
                useCallback, comme une fonction.
            </p>

            <p>
                Compteur : {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </p>

            <p>Temps total : {total_time}</p>

            <p>
                <button onClick={(() => addTime())}>Add Time</button>
            </p>
        </main>
    )
}
export default Memo;
