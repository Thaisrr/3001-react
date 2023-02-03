import {Pokemon} from "../types/Pokemon";

const url = process.env.REACT_APP_API_URL + '/pokemons' || 'PAS_DAPI_URL' ;


export const getAll = async (): Promise<Pokemon[]>  => {
    try {
        const res = await fetch(url);
        console.info(res)
       return await res.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getById = async (id: number): Promise<Pokemon | null> => {
    try {
        const res = await fetch(`${url}/${id}`);
        return await res.json();
    } catch (e) {
        console.error(e);
        return null
    }
}

export const create = async (pokemon: Pokemon): Promise<Pokemon | null> => {
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
        const res = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        return res.ok;
    } catch (e) {
        console.error(e);
        return false;
    }
}


export const update = async (pokemon: Partial<Pokemon>  & {id: number}) => {
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

export const search = async (search: string): Promise<Pokemon[]> => {
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

/*********** Types ***********/

