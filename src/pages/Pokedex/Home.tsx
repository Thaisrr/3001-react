import React, {ChangeEvent, useEffect, useState} from "react";
import {Pokemon} from "../../utils/types/Pokemon";
import {getAll, search} from "../../utils/services/PokemonService";
import PokeCard from "./layout/PokeCard";
import {Link} from "react-router-dom";

const Home = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        getAll().then(p => setPokemons(p))
    }, []);

    const Pokemons = () => (
        <div className='grid'>
            { pokemons.map(pk => <PokeCard setPokemons={setPokemons} pokemon={pk} key={`test${pk.id}-card`}/>) }
        </div>
    )

    const Error = () => (
        <p className='info'>Tu n'as aucun Pokémon dans ton Pokédex pour l'instant. </p>
    )

    const searchPokemon = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const res = await search(value);
        setPokemons(res);
    }


    return (
        <main>
            <h1>Mon Pokédex</h1>

            <p><Link to={'create'}>Ajouter un pokémon</Link></p>

            <p>
                <input type="search" placeholder='Carapuce, Bulbizarre, Salaméche...' onChange={searchPokemon}/>
            </p>

            <section>
                { (pokemons?.length) ?
                    <Pokemons/> : <Error/>
                }
            </section>
        </main>
    )
}
export default Home
