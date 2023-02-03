import {Pokemon} from "../../../utils/types/Pokemon";
import {Link} from "react-router-dom";
import {remove} from "../../../utils/services/PokemonService";

type PokeProps = {
    pokemon: Pokemon,
    setPokemons : Function
}
const PokeCard = ({pokemon, setPokemons}: PokeProps) => {

    const deletePokemon = async () => {
        if(pokemon.id) {
            const res = await remove(pokemon.id);
            if(res) {
                setPokemons((state: Pokemon[]) => {
                    const index = state.findIndex(p => p.id === pokemon.id);
                    const copy = [...state];
                    copy.splice(index, 1);
                    return copy;
                })
            }
        }
    }

    return (
        <div className='card'>
            <figure>
                <img src={pokemon.image} alt='' aria-labelledby={pokemon.name}/>
            </figure>
            <h3 id={pokemon.name}>{pokemon.name}</h3>
            <p className='flex'>
                {pokemon.types && pokemon.types?.map(t => <span key={`${pokemon.id}-${t}`} className='candy'>{t}</span>)}
            </p>
            <p className='flex'>
                <Link to={`update/${pokemon.id}`}>Modifier</Link>
                <button onClick={deletePokemon} className='warn'>Supprimer</button>
            </p>
        </div>
    )
}
export default PokeCard
