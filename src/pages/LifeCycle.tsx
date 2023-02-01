import {useEffect, useState} from "react";
import CycleChild from "../layout/CycleChild";

const LifeCycle = () => {
    console.log('%c Executing component function', "color: green; background: white");

    let staticCounterRandom = Math.random();
    let staticCounter = 0;
    const [counter, setCounter] = useState(0);
    const incrementStatic = () => {
        staticCounter++;
        staticCounterRandom++;
        console.log('Incrementing static counters', staticCounter, staticCounterRandom)
    }

    const [user, setUser] = useState({
        username: "Toto",
        password: 'super_secret'
    })

    const [message, setMessage] = useState<string>();

    const getMessageFromApi = () => {
        console.log('Getting message from API');
        const api_message = 'Hello World';
        setMessage(api_message);
    }

    // Boucle infinie
    //getMessageFromApi();

    useEffect(() => {
        console.log('%c In Use Effect - []', "color: green; background: white");
        getMessageFromApi();
    }, []);

    useEffect(() => {
        console.log('%c Use Effect : counter updated', "color: green; background: white");
    }, [counter]);

    useEffect(() => {
        console.log('UseEffect : static Counter updated : ', staticCounter)
    }, [staticCounter]); // Jamais trigger

    useEffect(() => {
        console.log('UseEffect : static Counter RANDOM updated : ', staticCounterRandom)
    }, [staticCounterRandom]) // trigger à chaque mise à jour

    useEffect(() => {
        console.log('User updated', user)
    }, [user])

    const updateUsername = (value: string) => {
        console.log(value)
        user.username = value;
        setUser(user);
    }



    return (
        <main>
            <h1>Component LifeCycle</h1>

            <p>Compteur: {counter}</p>
            <p>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => incrementStatic()}>Increment Static</button>
            </p>

            <section>
                <h2>Fonctionnement de la réactivité</h2>

                <p>A chaque modification du state ou de props, React rééxécute la fonction du composant.</p>
                <p>De ce fait, React recréé les variables déclarées dans la fonction.</p>
                <p>Ici, on peut voir que <b>staticCounter</b> se remet à 0 dès que counter ( state ) est mis à jour.</p>
                <p>Lorsque ce sont des variables simples qui sont modifiées, React ne relance pas le composant.</p>
            </section>

            <section>
                <h2>UseEffect</h2>

                <p>UseEffect est un Hook qui permet de réagir lors d'effet de bord / du cycle de vie du composant.</p>
                <p>Il remplace les méthodes <i>componentDidMount(), componentDidUpdate(), et componentWillUnmount().</i></p>

                <p>Il prend en paramètre une callback ( l'action à effectuer ), et un tableau de dépendances ( les valeurs à surveiller ).</p>

                <p>Si le tableau de dép est vide : le useEffect se lance 1 fois au premier lancement du composant, puis plus tout.</p>
                <p>Sinon, il se lance dès que les données surveillées sont modifiées.</p>
                <p>Sans tableau de dép, il se lance à chaque mise à jour.</p>
                <p><b>Dans tous les cas, il se lance au moins 1 fois au démarrage du composant.</b></p>

                <p>Modifier une variable "classique" ( non reactive ) ne relance pas l'execution du composant. Par conséquent,
                les useEffect ne sont pas rejoué.
                </p>
                <p>
                    La plupart des variables "classique" sont remise à zéro si elles sont initialisées dans la fonction du composant.
                    Donc les useEffects qui les surveillent ne se lance pas, puisque pour eux, la valeur n'a jamais changée.
                </p>
                <p>Dans l'exemple ci-dessus : </p>
                <ul>
                    <li>StaticCounter est remis à sa valeur initiale, 0, à chaque rendu. Pour le useEffect, la valeur n'a jamais été modifiée.</li>
                    <li>StaticCounterRandom est initialisée à une valeur différente à chaque rendu : le useEffect associé se
                    lance donc.</li>
                </ul>

                <p>
                    Un useEffect ne doit <b>JAMAIS</b> modifier une valeur qu'il surveille de manière <b>non controllée</b> !
                </p>
                <p>
                    Un useEffect doit surveiller toutes les valeurs qu'il utilise dans sa callback pour s'assurer d'avoir toujours
                    des valeurs à jour.
                </p>
            </section>

            <section>
                <h2>Objet</h2>

                <p>Name : {user.username}</p>
                <p>Username : {user.password}</p>

                <p>
                    <label htmlFor='username'>Username (OK)</label>
                    <input id='username' onChange={(e) => setUser({...user, username: e.target.value})}/>
                </p>
                <p>
                    <label htmlFor='username2'>Username (PAS OK)</label>
                    <input id='username2' onChange={(e) => updateUsername(e.target.value)}/>
                </p>
            </section>

            <CycleChild count={counter}/>
        </main>
    )
}

export default LifeCycle;
