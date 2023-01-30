import React, {useState} from "react";

const Dynamisme = () => {

    const displayMessage = (message: string) => console.log(message);
    const sayHello = () => console.log('--- Void function');
    const displayEvent = (event : React.MouseEvent) => console.log('Event params');

    /**********/

    let counter = 0;

    const increment  = () => {
        counter++;
        console.log('Counter incremented : ', counter);
    }

    /**** useState ****/

    //const state = useState(0);
    //const reactiveCounter: number = state[0]; // etat de la valeur
    //const setReactiveCounter: Function = state[1]; // fonction de modification de la valeur
    const [reactiveCounter, setReactiveCounter] = useState(0);


    return (
        <main className='Dynamisme'>
            <h1>Réactivité</h1>

            <section>
                <h2>Les Événements</h2>

                <p>On retrouve les mêmes événements en React qu'en HTML 5 / JS.</p>
                <p>Les événements appellent des fonctions, et leur passe en paramétre un objet Event, qui contient les
                informations liées à l'événement : </p>
                <ul>
                    <li>target : l'élément HTML qui a déclanché l'événement</li>
                    <li>coordonnées : où sur la page, s'est déclanché l'event ?</li>
                    <li>Le type d'événement</li>
                    <li>Les méthodes liées à l'événement ( stop propagation, prevent default )</li>
                    <li>Ect...</li>
                </ul>
                <p>
                    <button onClick={(event) => console.log(event)}>Click Event</button>
                    <button onClick={console.log}>Click Event</button>
                </p>

                <p>
                    <input type='search' onInput={(event)  => {
                            const input = event.target as HTMLInputElement;
                            console.log('Vous avez cherché : ', input.value);
                        }}
                    />
                </p>

                <p style={{background: 'aqua'}} onClick={() => console.log('Paragraphe')}>
                    Click here !
                    <button onClick={(e) => {
                        e.stopPropagation();
                        console.log('Button');
                    }}>Click !
                    </button>
                </p>

                <p>Messages: </p>
                <p>
                    <button onClick={console.log}>Log Event</button>
                    <button onClick={sayHello}>Void Function</button>
                    <button onClick={displayEvent}>Event params ( or any )</button>
                    <button onClick={() => displayMessage('Hello')}>Hello</button>
                    <button onClick={() => displayMessage('Konichiwa')}>Konichiwa</button>
                    <button onClick={() => displayMessage('Holà')}>Holà</button>
                </p>
            </section>

            <section>
                <h2>Compteur</h2>
                <p>Valeur : {counter}</p>
                <p>
                    <button onClick={() => increment()}>Incrementer</button>
                </p>
                <p>
                    En React, si on souhaite que des variables soient réactives, il va falloir lui demander de les surveiller.
                </p>
                <p>Il faut utiliser un <b>Hook</b>. Les Hooks sont des fonctions, qui s'éxécutent à un moment de l'application.</p>
                <p>React surveille les valeurs gérées par des Hooks, afin d'avoir un rendu et des mises à jours du DOM plus performantes.</p>

            </section>

            <section>
                <h2>UseState : Hook d'état</h2>

                <p>Valeur : {reactiveCounter}</p>
                <p>
                    <button onClick={() => setReactiveCounter(reactiveCounter + 1)}>Increment</button>
                    <button onClick={() => setReactiveCounter((prev_value) => --prev_value )}>Decrement</button>
                </p>

                <p>UseState, c'est le Hook d'état. Il permet de demander à React de surveiller une valeur, et de mettre à jour le DOM quand elle est modifiée.</p>
                <p>UseState est une fonction, qui prend en paramétre la valeur par défaut, et qui retourne un tuple [any, Function].</p>
                <p>Le premier élément du tuple retourné contient la valeur de notre state, mis à jour automatiquement.</p>
                <p>Le deuxième contient une fonction qui permet de modifier le state, et qui prend en paramétre : </p>
                <ul>
                    <li>La nouvelle valeur</li>
                    <li>Une fonction au format : <code> {" (previous_state) => nouvelle valeur "} </code> ( paramétre : l'état actuel, retour : nouvelle valeur ).</li>
                </ul>
                <p>Le state ne doit <b>JAMAIS</b> être modifié directement, il faut toujours passer par la fonction.</p>
            </section>

        </main>
    )
}
export default Dynamisme;
