import {User} from "../types/User";

const url = process.env.REACT_APP_API_URL  || 'PAS_DAPI_URL' ;


export const inscription = async (new_user: User) => {
    const res = await fetch(`${url}/register`, {
        method: 'POST',
        body: JSON.stringify(new_user),
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok)  throw await res.text();
    return true;
}

export const authenticate = async (userAuth: User) => {
    const res = await fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify(userAuth),
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok) throw await res.text();
    const {user, accessToken} = await res.json();
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    return true;
}


export const logout = () => localStorage.clear();

export const isLogged = (): boolean => !!localStorage.getItem('token');

export const getToken = () => localStorage.getItem('token');

export const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if(storedUser) {
        return JSON.parse(storedUser);
    }
}
