import {Book} from "../utils/types/Book";

export const Child1 = (props: {message: string}) => {
    return (
        <div className='card'>
            <p>{props.message}</p>
        </div>
    )
}

// L'objet props ne correspond pas à une entité
type Child2Props = {title: string, author: string };
export const Child2 = (props: Child2Props) => {
    return (
        <div className='card'>
            <h3>{props.title}</h3>
            <p>-- {props.author}</p>
        </div>
    )
}

// Si les props attendues correspondent à une entité
export const BookCard = (book: Book) => {
    return (
        <div className='card'>
            <h3>{book.title}</h3>
            <p>-- {book.author}</p>
        </div>
    )
}

export type ButtonProps = {
    children: string,
    level?: 'info' | 'success' | 'warn',
    //action: Function,
    action: (...args: any) => void
}
export const MyButton = ({children,action, level = 'info'}: ButtonProps) => {
    return (
        <button onClick={() => action('arg 1')} className={level}>
            {children}
        </button>
    )
}


type BookProps = {
    book: Book,
    removeFunc: (...args: any) => void
}
export const BookCard2 = ({book, removeFunc}: BookProps) => {

    return (
        <div className='card'>
            <h3>{book.title}</h3>
            <p>-- {book.author}</p>
            <p>
                <MyButton
                    action={removeFunc}
                    level='warn'>
                    Supprimer
                </MyButton>
            </p>
        </div>
    )
}
