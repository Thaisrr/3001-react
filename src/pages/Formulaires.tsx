import React, {useState} from "react";
import {User} from "../utils/types/User";
import {MyButton} from "../layout/Enfants";
import {useForm} from "react-hook-form";

const Formulaires = () => {

    const [user, setUser] = useState<User>({password: '', email: ''});
    const [emailTouched, setEmailTouched] = useState<boolean>(false);
    const setEmail  = (email: string) => {
        setUser({...user, email})
    }
    const setPassword = (password: string) => {
        setUser({...user, password})
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(user.email && user.password) {
            console.log('Saving user', user)
        } else {
            alert('There are errors remaining in the form !')
        }
    }

    const {register, handleSubmit, formState : {errors}, watch} = useForm<User>();
    const watchPassword = watch('password');

    const saveUser = (user: User) => {
        console.log(user);
    }

    return (
        <main>
            <h1>Les Formulaires</h1>

            <section>
                <h2>Natifs</h2>

                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' onChange={(e) => setEmail(e.target.value.trim())} onBlur={() => {
                            setEmailTouched(true);
                            console.log('blur')
                        }}/>
                        {(!user.email && emailTouched) &&
                            <p className='error'>Veuillez entrer un email</p>
                        }
                        {
                            (user.email && !user.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) && emailTouched &&
                            <p>Votre email est invalide</p>
                        }
                    </div>
                    <div>
                        <label htmlFor='password' >Password</label>
                        <input id='password' name='password' onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <p>
                        <MyButton action={() => {}}>Save</MyButton>
                    </p>
                </form>
            </section>
            <section>
                <h2>React Hook Form</h2>

                <p>More infos in <a href='https://react-hook-form.com/get-started#Quickstart'>Documentation</a> </p>

                <form onSubmit={handleSubmit(saveUser)}>
                    <div>
                        <label htmlFor='email2'>Email</label>
                        <input id='email2' {...register('email', {required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                        {errors?.email?.type === 'required' && <p className='error'>Veuillez entrer un email</p> }
                        {errors?.email?.type === 'pattern' && <p className='error'>Votre email est invalide</p> }
                    </div>
                    <div>
                        <label htmlFor='pwd2'>Password</label>
                        <input id='pwd2' {...register('password', {
                            required: "Veuillez entrer un mot de passe",
                            minLength: {value: 6, message: 'Votre mot de passe est trop court'},
                            validate: (value) => (value === "password") || 'Le mot de passe doit être "password"'
                        })}/>
                        <p className='error'>{errors?.password?.message}</p>
                        <p>{watchPassword === 'password' && 'Mot de passe valide !'}</p>
                    </div>
                    <p>
                        <button>Enregistrer</button>
                    </p>
                </form>
            </section>
        </main>
    )
}

export default Formulaires;
