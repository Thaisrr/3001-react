import {useForm} from "react-hook-form";
import {User} from "../utils/types/User";
import {useState} from "react";
import {useLogin, useRegister} from "../utils/hooks/UseAuth";

const Login = () => {

    const {register, handleSubmit} = useForm<User>();
    const [isLogin, setIsLogin] = useState(false);
    const auth = useLogin();
    const save = useRegister();

    const handleLogin = async (user: User) => {
        if(!isLogin) {
           await save(user);
        } else {
          await auth(user);
        }
    }


    return (
        <main>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleLogin)}>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type='email' {...register('email')}/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input type='password' {...register('password')}/>
                </p>
                <p>
                    <button onClick={() => setIsLogin(true)}>Login</button>
                    <button onClick={() => setIsLogin(false)}>Inscription</button>
                </p>
                
            </form>

        </main>
    )
}
export default Login
