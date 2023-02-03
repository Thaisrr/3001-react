import {useReducer} from "react";

type StateType = {counter: number};
type ActionType = {type: 'increment' | 'decrement' | 'incrementByAmount' | 'decrementByAmount' | 'reset', payload?: number}
const initialState = {counter: 0}
const reducer = (state: StateType, {type, payload = 0}: ActionType) => {
    switch (type) {
        case "increment":
            return {counter: state.counter + 1};
        case "decrement":
            return {counter: state.counter - 1};
        case "incrementByAmount":
            return (payload)? {counter: state.counter + payload} : state;
        case "decrementByAmount":
            return (payload)? {counter: state.counter - payload} : state;
        case "reset" :
            return initialState;
        default:
            return state;
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <main>
            <h1>Reducer</h1>

            <p>Counter : {state.counter}</p>
            <p>
                <button onClick={() => dispatch({type: 'decrement'})}>--</button>
                <button onClick={() => dispatch({type: 'increment'})}>++</button>
                <button onClick={() => dispatch({type: 'incrementByAmount', payload: 10})}>+10</button>
                <button onClick={() => dispatch({type: 'increment', payload: 10})}>-10</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </p>
        </main>
    )
}
export default Reducer
