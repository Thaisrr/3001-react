import {useState} from "react";
import {UserApi} from "../../utils/types/UserApi";
import axios from "axios";

const Requests = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const [users, setUsers] = useState<UserApi[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            setUsers(await response.json());
        } catch (e) {
            alert('Nope')
        }
    }

    const axiosUsers = async () => {
        try {
            const {data} = await axios.get(url);
            setUsers(data);
        } catch (e) {
            console.log(e);
            alert('nope')
        }
    }

    const postFetch = async () => {
        const new_user: UserApi = {id: 0, name: 'Jean Michel', email: 'jeanmi@chel.fr', username: 'JeanMi'};
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(new_user),
            headers: {
               // 'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(response.status, response.headers.get('Content-Type'), data);
    }

    const postAxios = async () => {
        const new_user: UserApi = {id: 0, name: 'Jean Michel', email: 'jeanmi@chel.fr', username: 'JeanMi'};
        const {status, data} = await axios.post(url, new_user, {
            headers: {} // content-type application/json auto
        });
        console.log(status, data);

    }


    const UserCard = (user: UserApi) => {
        return (
            <div className='card'>
                <h3>{user.name}</h3>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
        )
    }

    return (
        <main>
            <h1>Requests</h1>

            <p>
                <button onClick={() => fetchUsers()}>Fetch Users</button>
                <button onClick={() => postFetch()}>Post with Fetch</button>
            </p>
            <p>
                <button onClick={() => axiosUsers()}>Axios Users</button>
                <button onClick={() => postAxios()}>Post with Axios</button>
            </p>
            <section>
                <h2>Users</h2>

                <div className='grid'>
                    {
                        users.map(u => (
                            <UserCard {...u}  key={`user-${u.id}`}/>
                        ))
                    }

                </div>
            </section>
        </main>
    )
}
export default Requests
