import React from 'react';
import './styles/App.css';
import Presentation from "./pages/Presentation";
import Conditionnel from "./pages/Conditionnel";
import Tableaux from "./pages/Tableaux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation";
import Dynamisme from "./pages/Dynamisme";

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
