import React from "react";

type MyState = {counter: number, name: string}
class Classe extends React.Component<any, MyState> {
    message = 'Hello World';
    state: MyState = {
        counter: 0,
        name: 'Jean Michel',
    }
    interval? : NodeJS.Timer;

    constructor(props: any) {
        super(props);
        console.log('Constructor de Classe Component');
    }


    componentDidMount() {
        console.log('Component mounted');
        // Pour toutes les actions à lancer au démarrage du composant
        let time = 0;
        this.interval = setInterval(() => {
            time++;
            console.log('Time', time)
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<MyState>): any {
        console.log('Before update of Classe Component');
        return 'Hello From Snapshot !'
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<MyState>, snapshot?: any) {
        console.log('Class component updated ( state or props )', snapshot);
    }

    componentWillUnmount() {
        // Toutes les actions à faire avant la destruction du composant
        console.log('Unmount Classe Component');
        clearInterval(this.interval);
    }


    increment() {
        this.setState({counter: this.state.counter + 1});
        console.log('log : ', this.state.counter)
    }

    render() {
        return (
            <main>
                <h1>Classe Component</h1>
                <p>{this.message}</p>
                <p>{this.state.name}</p>
                <p>Compteur : {this.state.counter}</p>
                <p>
                    <button onClick={() => this.increment()}>Increment</button>
                </p>
            </main>
        )
    }

}
export default Classe;
