const Conditionnel = () => {
    const is_logged = true;
    let role: 'ADMIN' | 'USER' | 'SUPER' = 'ADMIN';

    // Assignation Conditionnelle
    let foo;
    foo = foo || 'default'; // Assigne une valeur si foo est falsy
    foo ||= 'default';
    foo = foo && 'nouvelle valeur'; // Assigne une valeur si foo est truthy
    foo &&= 'nouvelle valeur';

    let age = 0;
    age = age ?? 10; // Assigne la valeur si age est undefined ou null
    age ??= 10;




    const loggedBlock =  (
        <div>
            <h3>Bonjour Jean Michel</h3>
            <p>
                <button>Voir mon profil</button>
                <button>Se déconnecter</button>
            </p>
        </div>
    );

    const notLoggedBlock = (
        <div>
            <h3>Vous n'êtes pas connecté⋅e !</h3>
            <button>Login</button>
        </div>
    )

    const Logged = () => (
        <div>
            <h3>Bonjour Jean Michel</h3>
            <p>
                <button>Voir mon profil</button>
                <button>Se déconnecter</button>
            </p>
        </div>
    );

    const NotLogged = () => (
        <div>
            <h3>Vous n'êtes pas connecté⋅e !</h3>
            <button>Login</button>
        </div>
    )

    const Role = (): JSX.Element => {
        switch (role) {
            case "USER":
                return <p>Vous êtes un⋅e Gueux⋅se</p>
            case "ADMIN":
                return <p>Pas mal !</p>
            case "SUPER":
                return <p>Vous êtes tout⋅e Puissant⋅e !</p>
            default :
                return <p>Mais qui êtes vous ?</p>
        }
    }


    // @ts-ignore
    return (
        <main className='Conditionnel'>
            <h1>Affichage Conditionnel</h1>

            <section>
                <h2>Si... Sinon...</h2>
                {/* Afficher "Connecté⋅e" ou "Hors Ligne" */}
                <p><b>Status</b> : {(is_logged)? 'Connecté⋅e' : 'Hors Ligne' }</p>
                {(is_logged)? loggedBlock : notLoggedBlock}
                {(is_logged)? <Logged/> : <NotLogged/>}
                <Role/>

                <p>Pour des conditions simples, on peut utiliser le ternaire. </p>
                <p>On peut aussi créer des composants / des fonctions  qui retourne le JSX en fonction de la condition.</p>

                <h2>Si... alors ( pas de else )</h2>

                {
                    // @ts-ignore
                    (role === "SUPER") ? <p>Composant Dashboard Super Admin</p> : null
                }

                { is_logged && <p>Vous êtes en ligne</p>}

                {is_logged || <p>Veuillez vous connecter</p>}

                {/* Affiche l'age si l'age est !== undefined ou null, sinon le paragraphe */}
                { age ?? <p>Age invalide</p>}

            </section>
        </main>
    )
}

export default Conditionnel;
