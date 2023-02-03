import {useState} from "react";

const Promises = () => {


    // Simule un appel API qui retournerai une string
    const getPromise = (id: number = 1): Promise<string> => (
        new Promise((resolve, reject): void => {
            const datas = ['Hello World', 'Coucou', 'Holà', 'Konnichiwa', 'Guten Tag', 'Namaste'];
            setTimeout(() => {
                if(Math.random() > 1) {
                    reject('Oh No from first promise! ')
                } else {
                   resolve(datas[id -1]);
                }
            }, 2000)
        })
    );

    const getUpperPromise = (data: string): Promise<string> => (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.7) {
                    reject('Oh No from upper! ')
                } else {
                    resolve(data.toUpperCase())
                }
            }, 2000)
        })
    )


    const [message, setMessage] = useState<string>();
    const [status, setStatus] = useState({
        hasError: false,
        pending: false,
        error: ''
    })

    // Syntaxe 1
    const getData1 = () => {
        setStatus({...status, pending: true})
        getPromise()
            .then((res) => getUpperPromise(res))
            .then((res) => {
                setMessage(res)
                setStatus({hasError: false, pending: false, error: ''})
            })
            .catch(err => setStatus({hasError: true, pending: false, error: err}))
    }

    //Syntaxe 2
    // Dans une fonction async   async () =>  ||   async function ... ()
    // await devant les promesses / les fonctions qui retournent des promesses
    // SI la fonction retourne quelque chose, il faut de nouveau attendre '( await, then )
    // => La fonction retourne une promesse ( du return si il y en a un, ou de void )
    // => Attention, toutes les callback n'acceptent pas d'être async
    // ( forEach, et méthodes de tableau, useEffect, ... )
    const getData2 = async (): Promise<void> => {
        try {
            setStatus({...status, pending: true});
            const response = await getPromise();
            setMessage(await getUpperPromise(response));
            setStatus({hasError: false, pending: false, error: ''});
        } catch (e: any) {
            setStatus({
                hasError: true,
                pending: false,
                error: e || 'Oups, quelque chose s`est mal passé'
            })
        }
    }


    const getDatassss = async () => {
        const ids = [4, 5, 6];
        const promises = ids.map(id => getPromise(id));
        try {
            // Promise.all => renvoie un tableau contenant les réponses des promesses, lorsqu'elles sont toutes résolées
            // Promise.any => renvoie la première valeur résolue, même si les autres sont en erreur
            const responses = await Promise.all(promises);
            console.log(responses);
        } catch {
            console.warn('Ça marche pas')
        }
    }


    return (
        <main>
            <h1>Promises</h1>
            <p>
                <button disabled={status.pending} onClick={getData1}>Get Message - then</button>
                <button disabled={status.pending} onClick={getData2}>Get Message - async await</button>
                <button onClick={getDatassss}>Get Multiple</button>
            </p>
            {status.pending?
                (<p className='info'>Chargement en cours...</p>) :
                (status.hasError?
                    <p className='info warn'>{status.error}</p> :
                    (message?
                        <p className='info success'>{message}</p> :
                        <p>Appuyer sur le bouton pour charger les données</p>
                    )
                )
            }
        </main>
    )
}
export default Promises
