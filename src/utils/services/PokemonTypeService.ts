import {PokemonType} from "../types/Pokemon";

const url = process.env.REACT_APP_API_URL + '/types' || 'PAS_DAPI_URL' ;


export const getAll = async (): Promise<PokemonType[]>  => {
    try {
        const res = await fetch(url);
        console.info(res)
        return await res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getById = async (id: number): Promise<PokemonType | null> => {
    try {
        const res = await fetch(`${url}/${id}`);
        return await res.json();
    } catch (e) {
        console.error(e);
        return null
    }
}

export const create = async (pokemon: PokemonType): Promise<PokemonType | null> => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const remove = async (id: number): Promise<boolean> => {
    try {
        const res = await fetch(`${url}/${id}`);
        return res.ok;
    } catch (e) {
        console.error(e);
        return false;
    }
}


export const update = async (pokemon: Partial<PokemonType>  & {id: number}) => {
    try {
        const res = await fetch(`${url}/${pokemon.id}`, {
            method: 'PATCH',
            body: JSON.stringify(pokemon),
            headers: {'Content-Type': 'application/json'}
        });
        return await res.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const search = async (search: string): Promise<PokemonType[]> => {
    try {
        const params = new URLSearchParams({
            q: search
        })
        const res = await fetch(url + '?' + params.toString());
        return await res.json()
    } catch (e) {
        console.error(e);
        return []
    }

}
