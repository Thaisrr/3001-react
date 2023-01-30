const Tableaux = () => {
    const fruits = ['Pommes', 'Bananes', 'Poires', 'Coings', 'Kaki'];
    const list_jsx = [
      <p key="p1">Paragraphe 1</p>,
      <p key="p2">Paragraphe 2</p>
    ];
    const Fruits = () => {
        const lis = fruits.map((f) => <li key={f}>{f}</li>);
        return <ul>{lis}</ul>
    }

    return (
        <main className='Tableaux'>
            <h1>Les tableaux</h1>

            <p>React est capable d'afficher une liste de JSX.</p>
            <p>Attention, dans une liste de JSX, chaque élément doit avoir un attribut "key" unique ( à la manière d'un id ).</p>
            {list_jsx}

            <p>Pour afficher une liste de données, il faut la transformer en liste de JSX.</p>
            <ul>
                {fruits.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Fruits/>
        </main>
    )
}
export default Tableaux;
