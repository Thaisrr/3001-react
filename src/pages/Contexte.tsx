import {createContext, useContext, useState} from "react";
import {useForm} from "react-hook-form";
const InfoContext = createContext<{alert: InfoType, setAlert: Function} | null>(null);

type InfoType = {
    text: string,
    level: 'warn' | 'info' | 'success'
}

const Contexte = () => {
    const [info, setInfo] = useState<InfoType>({
        text: 'Ceci est une info très importante',
        level: "info"
    });

    const {register, handleSubmit} = useForm<InfoType>();

    return (
        <InfoContext.Provider value={{alert: info, setAlert: setInfo}}>
            <main>
                <h1>Contexte</h1>
                <form onSubmit={handleSubmit(setInfo)}>
                    <p>
                        <label htmlFor='text'>Message</label>
                        <input id='text' {...register('text', {required: true})}/>
                    </p>
                    <p>
                        <label htmlFor='level'>Level</label>
                        <select {...register("level")}>
                            <option value='warn'>Warning</option>
                            <option value='success'>Success</option>
                            <option value='info'>Info</option>
                        </select>
                    </p>
                    <button>Send</button>
                </form>
                <ContexteChild1/>
                <ContexteChild2/>
            </main>
        </InfoContext.Provider>
    )
}
export default Contexte;



const ContexteChild1 = () => {
    const info = useContext(InfoContext);
    return (
        <section>
            <h2>Child 1</h2>
            <p className={`info ${info?.alert.level}`}>{info?.alert.text}</p>
        </section>
    )
}

const ContexteChild2 = () => {
    return (
        <section>
            <h2>Child 2</h2>
            <DeepChild/>
        </section>

    )
}

const DeepChild = () => {
    const info = useContext(InfoContext);
    return (
        <>
            <h3>Deep Child</h3>
            <p>[{info?.alert.level}] {info?.alert.text}</p>
            <p>
                <button onClick={() => info?.setAlert({text: 'Coucou from child', level: 'success'})}>Send Success</button>
                <button onClick={() => info?.setAlert({text: 'Coucou from child', level: 'info'})}>Send Info</button>
                <button onClick={() => info?.setAlert({text: 'Coucou from child', level: 'warn'})}>Send Warning</button>
            </p>
        </>
    )
}
