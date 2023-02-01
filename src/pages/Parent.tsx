import {Child1, Child2, BookCard, MyButton, BookCard2} from "../layout/Enfants";
import {Book} from "../utils/types/Book";
import {useState} from "react";

const Parent = () => {
    const book1 = {
        id: 1,
        title: `Le Meilleur des Mondes`,
        author: `Aldous Huxley`
    }

    const book2 = {
        id: 2,
        title: `A la Croisée des Mondes`,
        author: `Philippe Pullman`
    }


    const [books, setBooks] = useState<Book[]>(
        [
            book2, book1,
            {id: 3, title: 'Tchoupi à la plage', author: 'Inconnu'},
            {id: 4, title: 'Modeste Proposition', author: 'Jonathan Swift'}
        ]
    )

    const deleteBook = (index: number) => {
        const new_books = [...books];
        new_books.splice(index, 1);
        setBooks(new_books);
    }

    const doSomething = () => console.log('Something');

    return (
        <main>
            <h1>Les Props</h1>
            <div className='grid'>
                <Child1 message="Hello Props!"/>
                <Child1 message="Vive les props"/>
                <Child2 title='Frankenstein' author='Mary Shelley'/>
                <Child2 title={book1.title} author={book1.author} />
                <Child2 {...book2} />
                <BookCard {...book2} />
                <BookCard title={book1.title} author={book1.author} />

                <p className='flex'>
                    <MyButton action={() => console.log('Info')}>Click</MyButton>
                    <MyButton action={() => console.log('Warning')} children={'Oh no !'} level={'warn'}/>
                    <MyButton action={doSomething} level={'success'}>Youhouh !</MyButton>
                </p>

            </div>
            <div>
                <h2>Mes livres</h2>
                <div className='grid'>
                    {books.map((b, i) => (
                        <BookCard2 key={`book${b.id}`} book={b} removeFunc={() => deleteBook(i)}/>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default Parent;
