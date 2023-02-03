import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Pokemon, PokemonType} from "../../utils/types/Pokemon";
import {useEffect, useState} from "react";
import {getAll} from "../../utils/services/PokemonTypeService";
import {create, getById, update} from "../../utils/services/PokemonService";

const PokeForm = () => {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Pokemon>();
    const [types, setTypes] = useState<PokemonType[]>([]);
    const {id} = useParams();

    useEffect(() => {
        getAll().then(setTypes)
    }, []);

    useEffect(() => {
        if(id) {
            getById(+id).then(pk => {
                if(pk) reset(pk);
            })
        }
    }, [id, reset])

    const save = async (pokemon: Pokemon) => {
        if(id) {
            await update({...pokemon, id: +id});
        } else {
            await create(pokemon);
        }
        navigate('/pokedex');
    }


    // @ts-ignore
    return (
        <main>
            <h1>PokeForm</h1>

            <p><button onClick={() => navigate(-1)}>Retour Pokédex</button></p>

            <form onSubmit={handleSubmit(save)}>
                <p>
                    <label htmlFor='name'>Nom</label>
                    <input {...register('name', {
                        required: 'Ce pokémon à bien un nom ?'
                    })}/>
                    <small className='error'>{errors.name?.message}</small>
                </p>
                <p>
                    <label htmlFor='img'>Image</label>
                    <input id='img' {...register('image')}/>
                </p>
                <fieldset>
                    <legend>Types</legend>
                    <div className='grid'>
                        {types.map(type => (
                            <div key={`type-${type.id}`}>
                                <label htmlFor={`type-${type.id}`}>{type.name}</label>
                                <input type={"checkbox"} value={type.name} {...register('types')}/>
                            </div>
                        ))}
                    </div>
                </fieldset>
                <p>
                    <button>Enregistrer</button>
                </p>
            </form>

        </main>
    )
}
export default PokeForm
