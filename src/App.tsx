import React from 'react';
import './styles/App.css';
import Presentation from "./pages/Presentation";
import Conditionnel from "./pages/Conditionnel";
import Tableaux from "./pages/Tableaux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation";
import Dynamisme from "./pages/Dynamisme";
import Parent from "./pages/Parent";
import Formulaires from "./pages/Formulaires";
import Classe from "./pages/Classe";
import LifeCycle from "./pages/LifeCycle";
import Memo from "./pages/Memo";
import Reducer from "./pages/Reducer";
import Contexte from "./pages/Contexte";

function App() {
  return (
    <div className="App">
     <BrowserRouter> {/* toujours en top level */}
         <Navigation/>

         <Routes> {/* Les composants appelés par le routeur sont injectés ici */}
             <Route path='/' element={<Presentation/>} />
             <Route path='/affichage-conditionnel' element={<Conditionnel/>} />
             <Route path='/affichage-listes' element={<Tableaux/>} />
             <Route path='/reactivity' element={<Dynamisme/>} />
             <Route path='/props' element={<Parent/>} />
             <Route path='/forms' element={<Formulaires/>} />
             <Route path='/classe' element={<Classe/>} />
             <Route path='/life' element={<LifeCycle/>} />
             <Route path='/memo' element={<Memo/>} />
             <Route path='/reducer' element={<Reducer/>} />
             <Route path='/contexte' element={<Contexte/>} />
             <Route path='*' element={<h1>😭 404 not found 😭</h1>} />

         </Routes>



         <footer style={{textAlign: "center"}}>
             <hr/>
             <p>Dawan - Akkodis  - 2023 | Formation React </p>
         </footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
