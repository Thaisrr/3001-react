import React, {lazy, Suspense, useEffect} from 'react';
import './styles/App.css';
import Presentation from "./pages/Presentation";
import Conditionnel from "./pages/Conditionnel";
import Tableaux from "./pages/Tableaux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation";
import Dynamisme from "./pages/Dynamisme";
import Parent from "./pages/Parent";
import Formulaires from "./pages/Formulaires";
import Classe from "./pages/Hooks/Classe";
import LifeCycle from "./pages/Hooks/LifeCycle";
import Memo from "./pages/Hooks/Memo";
import Reducer from "./pages/Hooks/Reducer";
import Contexte from "./pages/Hooks/Contexte";
import Promises from "./pages/Ajax/Promises";
import Requests from "./pages/Ajax/Requests";
import Hooks from "./pages/Hooks/Hooks";
import Ajax from "./pages/Ajax/Ajax";
import Login from "./pages/Login";
import AuthGuard from "./guards/AuthGuard";
import {isLogged} from "./utils/services/AuthenticationService";
import {setLogged, setLogout} from "./store/UserSlice";
import AlertContainer from "./layout/AlertContainer";
import {useAppDispatch} from "./utils/hooks/UseStore";

const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const PokeForm = lazy(() => import('./pages/Pokedex/PokeForm'));
const Home = lazy(() => import('./pages/Pokedex/Home'));
function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(isLogged()) {
            dispatch(setLogged())
        } else {
            dispatch(setLogout())
        }
    }, [dispatch]);

  return (
    <div className="App">
     <BrowserRouter> {/* toujours en top level */}
         <Navigation/>
         <Suspense fallback={<h1>Chargement...</h1>}>
         <Routes> {/* Les composants appelés par le routeur sont injectés ici */}
             <Route path='/' element={<Presentation/>} />
             <Route path='/affichage-conditionnel' element={<Conditionnel/>} />
             <Route path='/affichage-listes' element={<Tableaux/>} />
             <Route path='/reactivity' element={<Dynamisme/>} />
             <Route path='/props' element={<Parent/>} />
             <Route path='/forms' element={<Formulaires/>} />
             <Route path='/hooks' element={<Hooks/>} >
                 <Route path='' element={<LifeCycle/>} />
                 <Route path='memo' element={<Memo/>} />
                 <Route path='classe' element={<Classe/>} />
                 <Route path='reducer' element={<Reducer/>} />
                 <Route path='contexte' element={<Contexte/>} />
             </Route>
             <Route path='/ajax' element={<Ajax/>}>
                 <Route path='promise' element={<Promises/>} />
                 <Route path='requests' element={<Requests/>}/>
             </Route>
                 <Route path='/pokedex' element={<AuthGuard><Pokedex/></AuthGuard>}>
                     <Route path='' element={<Home/>} />
                     <Route path='create' element={<PokeForm/>} />
                     <Route path='update/:id' element={<PokeForm/>} />
                 </Route>

             <Route path='/login' element={<Login/>} />
             <Route path='*' element={<h1>😭 404 not found 😭</h1>} />
         </Routes>
         </Suspense>




         <footer style={{textAlign: "center"}}>
             <hr/>
             <p>Dawan - Akkodis  - 2023 | Formation React </p>
         </footer>

         <AlertContainer/>

     </BrowserRouter>
    </div>
  );
}

export default App;
